import React, { useState } from "react";
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";

const users = [
    {
        key: "1",
        name: "Tony Reichert",
        email: "tony.reichert@example.com",
        phone: "123-456-7890",
        instance: "Harvard University",
        created: "Tuesday, November 23, 2024",
        role: "CEO",
        status: "Active",
    },
    {
        key: "2",
        name: "Zoey Lang",
        email: "zoey.lang@example.com",
        phone: "123-456-7891",
        instance: "Stanford University",
        created: "Wednesday, December 01, 2024",
        role: "Technical Lead",
        status: "Paused",
    },
    {
        key: "3",
        name: "Jane Fisher",
        email: "jane.fisher@example.com",
        phone: "123-456-7892",
        instance: "MIT",
        created: "Thursday, November 25, 2024",
        role: "Senior Developer",
        status: "Active",
    },
    {
        key: "4",
        name: "William Howard",
        email: "william.howard@example.com",
        phone: "123-456-7893",
        instance: "Yale University",
        created: "Friday, November 26, 2024",
        role: "Community Manager",
        status: "Vacation",
    },
    {
        key: "5",
        name: "Emily Collins",
        email: "emily.collins@example.com",
        phone: "123-456-7894",
        instance: "University of Oxford",
        created: "Saturday, November 27, 2024",
        role: "Marketing Manager",
        status: "Active",
    },
    {
        key: "6",
        name: "Brian Kim",
        email: "brian.kim@example.com",
        phone: "123-456-7895",
        instance: "University of Cambridge",
        created: "Sunday, November 28, 2024",
        role: "Product Manager",
        status: "Active",
    },
    {
        key: "7",
        name: "Laura Thompson",
        email: "laura.thompson@example.com",
        phone: "123-456-7896",
        instance: "Columbia University",
        created: "Monday, November 29, 2024",
        role: "UX Designer",
        status: "Active",
    },
    {
        key: "8",
        name: "Michael Stevens",
        email: "michael.stevens@example.com",
        phone: "123-456-7897",
        instance: "University of California, Berkeley",
        created: "Tuesday, November 30, 2024",
        role: "Data Analyst",
        status: "Paused",
    },
    {
        key: "9",
        name: "Sophia Nguyen",
        email: "sophia.nguyen@example.com",
        phone: "123-456-7898",
        instance: "Princeton University",
        created: "Wednesday, December 01, 2024",
        role: "Quality Assurance",
        status: "Active",
    },
    {
        key: "10",
        name: "James Wilson",
        email: "james.wilson@example.com",
        phone: "123-456-7899",
        instance: "California Institute of Technology",
        created: "Thursday, December 02, 2024",
        role: "Front-end Developer",
        status: "Vacation",
    },
    {
        key: "11",
        name: "Ava Johnson",
        email: "ava.johnson@example.com",
        phone: "123-456-7800",
        instance: "University of Chicago",
        created: "Friday, December 03, 2024",
        role: "Back-end Developer",
        status: "Active",
    },
    {
        key: "12",
        name: "Isabella Smith",
        email: "isabella.smith@example.com",
        phone: "123-456-7801",
        instance: "Duke University",
        created: "Saturday, December 04, 2024",
        role: "Graphic Designer",
        status: "Active",
    },
    {
        key: "13",
        name: "Oliver Brown",
        email: "oliver.brown@example.com",
        phone: "123-456-7802",
        instance: "University of Pennsylvania",
        created: "Sunday, December 05, 2024",
        role: "Content Writer",
        status: "Paused",
    },
    {
        key: "14",
        name: "Lucas Jones",
        email: "lucas.jones@example.com",
        phone: "123-456-7803",
        instance: "Cornell University",
        created: "Monday, December 06, 2024",
        role: "Project Manager",
        status: "Active",
    },
    {
        key: "15",
        name: "Grace Davis",
        email: "grace.davis@example.com",
        phone: "123-456-7804",
        instance: "Northwestern University",
        created: "Tuesday, December 07, 2024",
        role: "HR Manager",
        status: "Active",
    },
    {
        key: "16",
        name: "Elijah Garcia",
        email: "elijah.garcia@example.com",
        phone: "123-456-7805",
        instance: "Johns Hopkins University",
        created: "Wednesday, December 08, 2024",
        role: "Network Administrator",
        status: "Active",
    },
    {
        key: "17",
        name: "Emma Martinez",
        email: "emma.martinez@example.com",
        phone: "123-456-7806",
        instance: "University of Michigan",
        created: "Thursday, December 09, 2024",
        role: "Accountant",
        status: "Vacation",
    },
    {
        key: "18",
        name: "Benjamin Lee",
        email: "benjamin.lee@example.com",
        phone: "123-456-7807",
        instance: "New York University",
        created: "Friday, December 10, 2024",
        role: "Operations Manager",
        status: "Active",
    },
    {
        key: "19",
        name: "Mia Hernandez",
        email: "mia.hernandez@example.com",
        phone: "123-456-7808",
        instance: "University of Southern California",
        created: "Saturday, December 11, 2024",
        role: "Sales Manager",
        status: "Paused",
    },
    {
        key: "20",
        name: "Daniel Lewis",
        email: "daniel.lewis@example.com",
        phone: "123-456-7809",
        instance: "University of California, Los Angeles",
        created: "Sunday, December 12, 2024",
        role: "DevOps Engineer",
        status: "Active",
    },
    {
        key: "21",
        name: "Amelia Clark",
        email: "amelia.clark@example.com",
        phone: "123-456-7810",
        instance: "Boston University",
        created: "Monday, December 13, 2024",
        role: "Social Media Specialist",
        status: "Active",
    },
    {
        key: "22",
        name: "Jackson Walker",
        email: "jackson.walker@example.com",
        phone: "123-456-7811",
        instance: "University of Toronto",
        created: "Tuesday, December 14, 2024",
        role: "Customer Support",
        status: "Active",
    },
    {
        key: "23",
        name: "Henry Hall",
        email: "henry.hall@example.com",
        phone: "123-456-7812",
        instance: "McGill University",
        created: "Wednesday, December 15, 2024",
        role: "Security Analyst",
        status: "Active",
    },
    {
        key: "24",
        name: "Charlotte Young",
        email: "charlotte.young@example.com",
        phone: "123-456-7813",
        instance: "University of Sydney",
        created: "Thursday, December 16, 2024",
        role: "PR Specialist",
        status: "Paused",
    },
    {
        key: "25",
        name: "Liam King",
        email: "liam.king@example.com",
        phone: "123-456-7814",
        instance: "University of Melbourne",
        created: "Friday, December 17, 2024",
        role: "Mobile App Developer",
        status: "Active",
    },
];

const filterOptions = [
    { label: "Name", value: "name" },
    { label: "Email Address", value: "email" },
    { label: "Phone Number", value: "phone" },
    { label: "Instance", value: "instance" },
];

const Students = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>("name");
    const [page, setPage] = useState(1);
    const [searchData, setSearchData] = useState("");
    const rowsPerPage = 10;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchData(e.target.value);
    };

    const filteredData = users.filter((item: any) => {
        const filterValue = item[selectedFilter]?.toLowerCase() || "";
        return filterValue.includes(searchData.toLowerCase());
    });

    console.log(selectedFilter);

    const pages = Math.ceil(filteredData.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return filteredData.slice(start, end);
    }, [page, filteredData]);

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
                                            <FaPen size={15} />
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
        </DefaultLayout>
    );
};

export default Students