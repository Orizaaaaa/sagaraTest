import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";
import ModalDefault from "../../../components/fragments/modal/Modal";
import InputForm from "../../../components/elemets/input/InputForm";
import ButtonPrimary from "../../../components/elemets/buttonPrimary";
import { getUsers, updateUser } from "../../../service/user";



const filterOptions = [
    { label: "Name", value: "name" },
    { label: "Email Address", value: "email" },
    { label: "Phone Number", value: "phone" },
    { label: "Instance", value: "instance" },
];

const Students = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: 0,
        instance: '',

    })
    const { onOpen, onClose } = useDisclosure();
    const [users, setUsers] = useState([])
    const [idUser, setIdUser] = useState('')
    const { isOpen: isOpenUpdate, onOpen: onOpenUpdate, onClose: onCloseUpdate } = useDisclosure();
    const { onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()
    const [selectedFilter, setSelectedFilter] = useState<string>("name");
    const [page, setPage] = useState(1);
    const [searchData, setSearchData] = useState("");
    const rowsPerPage = 10;

    useEffect(() => {
        getUsers((data: any) => setUsers(data))
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchData(e.target.value);
    };
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const filteredData = users.filter((item: any) => {
        const filterValue = item[selectedFilter]?.toLowerCase() || "";
        return filterValue.includes(searchData.toLowerCase());
    });
    const pages = Math.ceil(filteredData.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return filteredData.slice(start, end);
    }, [page, filteredData]);


    const modal = (item: any, typeModal: string) => {
        if (typeModal === 'create') {
            onOpen();
        } else if (typeModal === 'update') {
            setForm({
                name: item.name, email: item.email, phone: item.phone, instance: item.instance
            })
            setIdUser(item.id)
            onOpenUpdate();
        } else {
            onOpenDelete();
        }

    }
    const handleUpdate = async (e: any) => {
        e.preventDefault()
        await updateUser(idUser, form, (result: any) => {
            if (result) {
                setForm({
                    name: '',
                    email: '',
                    phone: 0,
                    instance: '',
                })
                getUsers((data: any) => setUsers(data))
                onCloseUpdate();
            }
        })

    };

    console.log(users);



    return (
        <DefaultLayout>
            <h1 className="text-lg font-semibold mb-3">Data Student</h1>
            <div className="lg:flex justify-between my-4 space-y-3 lg:space-y-0">
                <div className="flex gap-3">
                    <div className="relative  ">
                        <Select
                            aria-label="Select a filter"
                            placeholder="Select a filter"
                            value={selectedFilter}
                            onChange={(value: any) => setSelectedFilter(value.target.value)}
                            className="w-50"
                        >
                            {filterOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                    <div className="flex">
                        <button className="flex items-center gap-2 bg-primary py-2 px-4 rounded-md">
                            <FiPlus size={20} color="white" />
                            <span className="font-medium text-white">Add User</span>
                        </button>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-full relative">
                        <input
                            onChange={handleSearch}
                            className="w-full rounded-md bg-white outline-none py-2 ps-11"
                            type="text"
                            placeholder="Search"
                        />
                        <IoSearch size={20} color="#7C7C7C" className="absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                    <div className="bg-white p-3 rounded-md cursor-pointer">
                        <GoGear />
                    </div>
                </div>
            </div>

            <Table
                aria-label="Example table with client side pagination"
                bottomContent={
                    <div className="flex w-full justify-center">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="secondary"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                        />
                    </div>
                }
                classNames={{
                    wrapper: "min-h-[50vh]",
                }}
            >
                <TableHeader>
                    <TableColumn key="name">Name</TableColumn>
                    <TableColumn key="email">Email Address</TableColumn>
                    <TableColumn key="phone">Phone Number</TableColumn>
                    <TableColumn key="instance">Instance</TableColumn>
                    <TableColumn key="created">Created At</TableColumn>
                    <TableColumn key="action">Action</TableColumn>
                </TableHeader>
                <TableBody items={items}>
                    {(item: any) => (
                        <TableRow key={item.key}>
                            {(columnKey) => (
                                <TableCell>
                                    {columnKey === "name" ? (
                                        <div className="flex items-center">
                                            <img
                                                src={"/images/user/user-01.png"}
                                                alt={item.name}
                                                className="w-10 h-10 rounded-full mr-3"
                                            />
                                            {item.name}
                                        </div>
                                    ) : columnKey === "action" ? (
                                        <div className="flex gap-3">
                                            <button onClick={() => modal(item, 'update')}>
                                                <FaPen size={15} />
                                            </button>
                                            <FaRegTrashCan size={15} color="red" />

                                        </div>
                                    ) : (
                                        item[columnKey]
                                    )}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <ModalDefault isOpen={isOpenUpdate} onClose={onCloseUpdate} >
                <h1 className="text-lg font-semibold mt-3" >Edit data student</h1>
                <form onSubmit={handleUpdate}>
                    <div className="flex gap-4">
                        <InputForm onChange={handleChange} htmlFor="name" title="Name" value={form.name} type="text" />
                        <InputForm onChange={handleChange} htmlFor="email" title="Email" value={form.email} type="text" />
                    </div>
                    <div className="flex gap-4">
                        <InputForm onChange={handleChange} htmlFor="phone" title="No Phone " value={form.phone} type="text" />
                        <InputForm onChange={handleChange} htmlFor="instance" title="Instance" value={form.email} type="text" />
                    </div>
                    <div className="flex justify-end my-3">
                        <ButtonPrimary type="submit" className="rounded-md"  >Save</ButtonPrimary>
                    </div>

                </form>
            </ModalDefault>
        </DefaultLayout>
    );
};

export default Students