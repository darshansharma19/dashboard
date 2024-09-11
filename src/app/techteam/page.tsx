/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Header from "@/components/Header";
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
      {/* TECH TEAM PAGE */}
      <Header />
      <section>
        <div className="grid grid-cols-[70%_30%] gap-4">
          {/* Left Column */}
          <div>
            <section className="p-4 rounded-md mt-4">
              <div>
                <h1 className="text-2xl font-semibold">TECH TEAM</h1>
              </div>

              {/* Employee Cards Grid */}
              <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-4">
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
                        Inactive Employee
                      </h5>
                    </a>
                    <span className="text-xl font-semibold text-red-500">
                      40
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
                        On Boarding
                      </h5>
                    </a>
                    <span className="text-xl font-semibold text-red-500">
                      40
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Chart Section */}
            <section className="p-4 rounded-md shadow-xl mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold -mb-1">
                    Employee Attendees
                  </h2>
                  <span className="font-semibold text-sm text-slate-400">
                    75% growth
                  </span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-ellipsis"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center h-full py-6">
                <div className="relative w-[200px] h-[200px]">
                  <svg
                    className="absolute top-0 left-0 w-full h-full transform -rotate-90"
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
                  <div className="absolute rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-900 dark:text-gray-50">
                    75%
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-4">
                  <div>
                    <span className="text-red-500 font-medium text-sm mr-2">
                      Notes:
                    </span>
                  </div>
                  <div>
                    <p className="text-sm">
                      Current sprint requires stakeholders to approve newly
                      amended policies.
                    </p>
                  </div>
                </div>

                <button
                  className="mt-4 inline-flex w-full items-center text-white bg-blue-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                  type="button"
                >
                  <span className="mx-auto">Take Action</span>
                </button>
              </div>
            </section>

            {/* Table Section */}
            <section className="p-4 rounded-md shadow-xl mt-4">
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
                      className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span>Filter</span>
                    </button>
                    <button
                      className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span>Export</span>
                    </button>
                    <button
                      className="inline-flex items-center text-white bg-blue-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      <span>Add User</span>
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
                        ID
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Two Step
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Profile
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Last Login
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Join Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        userId: "100",
                        name: "Neil Sims",
                        twoStep: "Active",
                        joinDate: "24/06/2024",
                        lastLogin: "Yesterday",
                        profile: "Designer",
                        statusColor: "bg-green-500",
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                      },
                      {
                        userId: "100",
                        name: "Toni",
                        twoStep: "Disable",
                        joinDate: "1/11/2023",
                        lastLogin: "Today",
                        profile: "Developer",
                        statusColor: "bg-green-500",
                        image:
                          "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
                      },
                      {
                        userId: "100",
                        name: "Hulk",
                        twoStep: "Active",
                        joinDate: "12/01/2023",
                        lastLogin: "Yesterday",
                        profile: "Web Developer",
                        statusColor: "bg-green-500",
                        image:
                          "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
                      },
                      {
                        userId: "100",
                        name: "Spiderman",
                        twoStep: "Disable",
                        joinDate: "2/1/2023",
                        lastLogin: "Tomorrow",
                        profile: "Digital Marketing",
                        statusColor: "bg-green-500",
                        image:
                          "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
                      },
                      {
                        userId: "100",
                        name: "Ant Man",
                        twoStep: "Active",
                        joinDate: "21/08/2024",
                        lastLogin: "Yesterday",
                        profile: "Developer",
                        statusColor: "bg-green-500",
                        image:
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
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
                        <td className="px-4 py-4">{user.userId}</td>
                        <td
                          scope="row"
                          className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <img
                            className="w-10 h-10 rounded-lg"
                            src={user.image}
                            alt={`${user.name} image`}
                          />
                          <div className="pl-3">
                            <div className="text-sm font-semibold">
                              {user.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">{user.twoStep}</td>
                        <td className="px-4 py-4">{user.profile}</td>
                        <td className="px-4 py-4">{user.lastLogin}</td>
                        <td className="px-4 py-4">{user.joinDate}</td>

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

          {/* Right Column */}
          <div>
            {/* Another Chart Section */}
            <section className="p-4 rounded-md shadow-xl">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="flex items-center -mb-1">
                    <span className="text-4xl font-semibold">35,568</span>
                    <span className="text-sm font-semibold ml-2 py-2 px-3 bg-red-500 text-white rounded-md flex items-center">
                      {" "}
                      <MoveDown className="h-3 w-3" /> 8.02%
                    </span>
                  </div>
                  <span className="font-semibold text-sm text-slate-400">
                    See the employee
                  </span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-ellipsis"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center h-full py-6">
                <div className="relative w-[200px] h-[200px]">
                  <svg
                    className="absolute top-0 left-0 w-full h-full transform -rotate-90"
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
                  <div className="absolute rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-900 dark:text-gray-50">
                    75%
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-4">
                  <div>
                    <span className="text-red-500 font-medium text-sm mr-2">
                      Notes:
                    </span>
                  </div>
                  <div>
                    <p className="text-sm">
                      Current sprint requires stakeholders to approve newly
                      amended policies.
                    </p>
                  </div>
                </div>

                <button
                  className="mt-4 inline-flex w-full items-center text-white bg-blue-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                  type="button"
                >
                  <span className="mx-auto">Take Action</span>
                </button>
              </div>
            </section>

            {/* Another Chart Section */}
            <section className="p-4 rounded-md shadow-xl mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold -mb-1">
                    Actions Needed
                  </h2>
                  <span className="font-semibold text-sm text-slate-400">
                    See the employee
                  </span>
                </div>
                <div>
                  <LayoutDashboard />
                </div>
              </div>
              <div className="flex items-center justify-center h-full py-6">
                <div className="relative w-[200px] h-[200px]">
                  <svg
                    className="absolute top-0 left-0 w-full h-full transform -rotate-90"
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
                  <div className="absolute rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-900 dark:text-gray-50">
                    75%
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-4">
                  <div>
                    <span className="text-red-500 font-medium text-sm mr-2">
                      Notes:
                    </span>
                  </div>
                  <div>
                    <p className="text-sm">
                      Current sprint requires stakeholders to approve newly
                      amended policies.
                    </p>
                  </div>
                </div>

                <button
                  className="mt-4 inline-flex w-full items-center text-white bg-blue-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                  type="button"
                >
                  <span className="mx-auto">Take Action</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
