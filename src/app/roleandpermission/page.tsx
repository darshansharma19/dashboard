/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  Trash2,
  Pencil,
  ToggleLeft,
  Plus,
  Key,
  X,
  MoveDown,
  MapPinned,
  Dot,
  LayoutDashboard,
  Building2,
  SlidersHorizontal,
  Star,
  ChevronRight,
  ArrowLeftRight,
  Heart,
  MessageSquareText,
  BookMarked,
  HeartPulseIcon,
  CircleDot,
  Minus,
} from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      {/*ROLES and PERMISSION PAGE */}
      <section>
        {/* Top heading Section */}
        <div>
          <section className="p-4 rounded-md mt-4">
            <div>
              <h1 className="text-2xl font-semibold">ROLES & PERMISSION</h1>
            </div>
          </section>
        </div>
        <div className="grid grid-cols-[50%_25%_25%] gap-4">
          {/* First Column */}
          <div>
            {/* Table Section */}
            <section className="p-4 rounded-md shadow-xl">
              <div className="relative overflow-x-auto sm:rounded-lg">
                <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                  <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 end-[10px] flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search-users"
                      className="block pl-4 py-3.5 text-sm text-gray-900 border border-gray-300 rounded-lg w-40 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg block p-2.5 px-6"
                    >
                      <option selected disabled>
                        Status
                      </option>
                      <option>Active</option>
                      <option>Inactive</option>
                      <option>Other</option>
                    </select>
                    <button
                      className="inline-flex items-center text-white bg-blue-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      <span>Add Role</span>
                    </button>
                  </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-all-search"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Role
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Permissions
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Role Type
                      </th>
                      <th scope="col" className="px-7 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Neil Sims",
                        permission: "Assign",
                        roleType: "Tech",
                        profile: "Designer",
                      },
                      {
                        name: "Toni",
                        profile: "Developer",
                        permission: "Not Assign",
                        roleType: "Non-Tech",
                      },
                      {
                        name: "Hulk",
                        profile: "Web Developer",
                        permission: "Assign",
                        roleType: "Non-Tech",
                      },
                      {
                        name: "Spiderman",
                        profile: "Digital Marketing",
                        permission: "Assign",
                        roleType: "Tech",
                      },
                      {
                        name: "Ant Man",
                        profile: "Developer",
                        permission: "Not Assign",
                        roleType: "Non-Tech",
                      },
                    ].map((user, i) => (
                      <tr
                        key={i}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id={`checkbox-table-search-${i}`}
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor={`checkbox-table-search-${i}`}
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-4 py-4">{user.name}</td>
                        <td className="px-4 py-4">{user.profile}</td>
                        <td className="px-4 py-4">{user.permission}</td>
                        <td className="px-4 py-4">{user.roleType}</td>

                        <td className="px-4 py-4">
                          <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg block w-full p-2.5"
                          >
                            <option selected disabled>
                              Actions
                            </option>
                            <option>Add</option>
                            <option>Delete</option>
                            <option>Other</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Second Column */}
          <div>
            {/* Table Section */}
            <section className="p-4 rounded-md shadow-xl">
              <div className="relative overflow-x-auto sm:rounded-lg">
                <div className="flex gap-2 items-center flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                  <div className="relative">
                    <div className="absolute inset-y-0 end-[6px] flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search-users"
                      className="block w-20 py-3.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 pl-1 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg block p-2.5 px-4"
                    >
                      <option selected disabled>
                        Status
                      </option>
                      <option>Active</option>
                      <option>Inactive</option>
                      <option>Other</option>
                    </select>
                    <button
                      className="inline-flex items-center text-white bg-blue-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      <span>Add Role</span>
                    </button>
                  </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-2">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-all-search"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="py-3">
                        ID
                      </th>
                      <th scope="col" className="py-3">
                        Name
                      </th>
                      <th scope="col" className="py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        userId: "100",
                        name: "Neil Sims",
                      },
                      {
                        userId: "100",
                        name: "Toni",
                      },
                      {
                        userId: "100",
                        name: "Hulk",
                      },
                      {
                        userId: "100",
                        name: "Spiderman",
                      },
                      {
                        userId: "100",
                        name: "Ant Man",
                      },
                    ].map((user, i) => (
                      <tr
                        key={i}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id={`checkbox-table-search-${i}`}
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor={`checkbox-table-search-${i}`}
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className=" py-4">{user.userId}</td>
                        <td className=" py-4">{user.name}</td>

                        <td className="py-4">
                          <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg block w-full p-2.5"
                          >
                            <option selected disabled>
                              Actions
                            </option>
                            <option>Add</option>
                            <option>Delete</option>
                            <option>Other</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Third Column */}
          <div className="p-4">
            {/* Employee Cards Grid */}
            <div className="container mx-auto grid grid-cols-1 p-2 gap-4">
              <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chart-no-axes-column"
                >
                  <line x1="18" x2="18" y1="20" y2="10" />
                  <line x1="12" x2="12" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="14" />
                </svg>
                <div>
                  <a href="#">
                    <h5 className="text-md font-bold tracking-tight mt-3 text-gray-600 dark:text-white">
                      Active Employee
                    </h5>
                  </a>
                  <span className="text-xl font-semibold text-blue-500">
                    30
                  </span>
                </div>
              </div>

              <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chart-no-axes-column"
                >
                  <line x1="18" x2="18" y1="20" y2="10" />
                  <line x1="12" x2="12" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="14" />
                </svg>
                <div>
                  <a href="#">
                    <h5 className="text-md font-bold mt-3 tracking-tight text-gray-600 dark:text-white">
                      Inactive Employee
                    </h5>
                  </a>
                  <span className="text-xl font-semibold text-red-500">
                    100
                  </span>
                </div>
              </div>

              <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chart-no-axes-column"
                >
                  <line x1="18" x2="18" y1="20" y2="10" />
                  <line x1="12" x2="12" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="14" />
                </svg>
                <div>
                  <a href="#">
                    <h5 className="text-md font-bold mt-3 tracking-tight text-gray-600 dark:text-white">
                      Total Employee
                    </h5>
                  </a>
                  <span className="text-xl font-semibold text-blue-500">
                    60
                  </span>
                </div>
              </div>

              <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chart-no-axes-column"
                >
                  <line x1="18" x2="18" y1="20" y2="10" />
                  <line x1="12" x2="12" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="14" />
                </svg>
                <div>
                  <a href="#">
                    <h5 className="text-md font-bold mt-3 tracking-tight text-gray-600 dark:text-white">
                      On Boarding
                    </h5>
                  </a>
                  <span className="text-xl font-semibold text-red-500">50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
