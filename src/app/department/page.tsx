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
    <div>
      {/* DEPARTMENTS PAGE */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold">DEPARTMENTS</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-3 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <ArrowLeftRight className="h-4 w-4 mr-2 rotate-90" />
              <span>Sort</span>
            </button>
            <button
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-3 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              <span>Filter</span>
            </button>
            <button
              className="inline-flex items-center text-white bg-blue-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-3"
              type="button"
            >
              <Plus className="h-4 w-4 mr-1" />
              <span>App New Department</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-[55%_45%] gap-4">
          {/* Left Column */}
          <div>
            <section className="rounded-md">
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
                        className="block py-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <select
                          id="countries"
                          className="bg-gray-50 hover:bg-gray-200 cursor-pointer transition border border-gray-300 text-gray-900 text-[12px] rounded-lg block p-2.5 pr-8"
                        >
                          <option selected disabled>
                            Status
                          </option>
                          <option>Open</option>
                          <option>Close</option>
                          <option>Other</option>
                        </select>
                      </button>
                      <button
                        className="inline-flex items-center text-white bg-blue-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                        type="button"
                      >
                        <span>Add Departments</span>
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

                        <th scope="col" className="px-2 py-3">
                          Department Name
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Department Code
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Department Head
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Teams
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Rating
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          departmentName: "Department 1",
                          departmentCode: "10900665",
                          departmentHead: "Name",
                          teams: "Tech",
                          image:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                        },
                        {
                          departmentName: "Department 1",
                          departmentCode: "10900665",
                          departmentHead: "Name",
                          teams: "Tech",
                          image:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                        },
                        {
                          departmentName: "Department 1",
                          departmentCode: "10900665",
                          departmentHead: "Name",
                          teams: "Tech",
                          image:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                        },
                        {
                          departmentName: "Department 1",
                          departmentCode: "10900665",
                          departmentHead: "Name",
                          teams: "Tech",
                          image:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                        },
                        {
                          departmentName: "Department 1",
                          departmentCode: "10900665",
                          departmentHead: "Name",
                          teams: "Tech",
                          image:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
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
                          <td
                            scope="row"
                            className="flex items-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <img
                              className="w-10 h-10 rounded-lg mr-2"
                              src={user.image}
                              alt={`${user.image} image`}
                            />
                            {user.departmentName}
                          </td>
                          <td className="px-2 py-4">{user.departmentCode}</td>
                          <td className="px-2 py-4">{user.teams}</td>
                          <td className="px-2 py-4">{user.departmentHead}</td>
                          <td className="px-2 py-4">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500" />
                            </div>
                          </td>

                          <td className="px-2 py-4">
                            <select
                              id="countries"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg block p-2.5 pr-8"
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
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Building Cards Grid */}
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-2 gap-4">
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
                      Active Departments
                    </h5>
                  </a>
                  <span className="text-xl font-semibold text-blue-500">
                    70
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
                      Inactive Departments
                    </h5>
                  </a>
                  <span className="text-xl font-semibold text-red-500">40</span>
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
                      Build Departments
                    </h5>
                  </a>
                  <span className="text-xl font-semibold text-red-500">50</span>
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
                      Total Departments
                    </h5>
                  </a>
                  <span className="text-xl font-semibold text-gray-400">
                    100
                  </span>
                </div>
              </div>
            </div>

            <div className="px-4">
              <div className="flex justify-between items-center my-3 px-2">
                <div className="ml-2">
                  <div>
                    <h2 className="text-sm font-semibold -mb-1">
                      Active Department
                    </h2>
                    <span className="font-semibold text-[12px] text-slate-400">
                      47 Teams
                    </span>
                  </div>
                </div>

                <div>
                  <button
                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span>View Tasks</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-[40%_60%] gap-4 w-full mt-4">
                <div className="h-52 w-full">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="url(#progress-gradient)"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 * (1 - 0.75)}
                      strokeLinecap="round" // Add this line
                    />

                    <defs>
                      <linearGradient
                        id="progress-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="h-52 w-full flex justify-center items-center flex-col">
                  <div className="flex items-center justify-between w-full px-6 pb-2">
                    <div className="flex items-center">
                      <div>
                        <div className="h-[5px] w-[22px] rounded-lg mr-2 bg-blue-500"></div>
                      </div>
                      <div className="text-gray-500 font-semibold">Active</div>
                    </div>
                    <div>
                      <span className="font-bold text-gray-500">30</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full px-6 pb-2">
                    <div className="flex items-center">
                      <div>
                        <div className="h-[5px] w-[22px] rounded-lg mr-2 bg-green-500"></div>
                      </div>
                      <div className="text-gray-500 font-semibold">
                        Building
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-gray-500">45</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full px-6 pb-2">
                    <div className="flex items-center">
                      <div>
                        <div className="h-[5px] w-[22px] rounded-lg mr-2 bg-red-500"></div>
                      </div>
                      <div className="text-gray-500 font-semibold">Overdue</div>
                    </div>
                    <div>
                      <span className="font-bold text-gray-500">0</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full px-6 pb-2">
                    <div className="flex items-center">
                      <div>
                        <div className="h-[5px] w-[22px] rounded-lg mr-2 bg-gray-400"></div>
                      </div>
                      <div className="text-gray-500 font-semibold">
                        Yet to start
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-gray-500">20</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="inline-flex items-center text-blue-500 bg-blue-100 border-2 border-dotted border-blue-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-bold w-full rounded-lg text-md pl-6 py-3"
                  type="button"
                >
                  <span>You can create a note for the departments here</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
