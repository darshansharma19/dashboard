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
      <Header />
      {/* LOCATION PAGE */}
      <section>
        <div className="grid grid-cols-[70%_30%] gap-4">
          {/* Left Column */}
          <div>
            <section className="p-4 rounded-md mt-4">
              <div>
                <h1 className="text-2xl font-semibold">LOCATION</h1>
              </div>

              {/* Location Cards Grid */}
              <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-2 gap-4">
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
                        Total Location
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
                        Active Locations
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
                        Inactive Location
                      </h5>
                    </a>
                    <span className="text-xl font-semibold text-blue-500">
                      30
                    </span>
                  </div>
                </div>
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
                      className="inline-flex items-center text-white bg-blue-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <span>Add Location</span>
                    </button>
                  </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        LOCATION NAME
                      </th>
                      <th scope="col" className="px-4 py-3">
                        BRANCHES
                      </th>
                      <th scope="col" className="px-4 py-3">
                        DEPARTMENT
                      </th>
                      <th scope="col" className="px-4 py-3">
                        STATUS
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DETAILS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        branches: "branch",
                        name: "Neil Sims",
                        userEmail: "neilsims@gmail.com",
                        department: "Department",
                        status: "Active",
                      },
                      {
                        branches: "branch",
                        name: "Neil Sims",
                        userEmail: "neilsims@gmail.com",
                        department: "Department",
                        status: "Active",
                      },
                      {
                        branches: "branch",
                        name: "Neil Sims",
                        userEmail: "neilsims@gmail.com",
                        department: "Department",
                        status: "Active",
                      },
                      {
                        branches: "branch",
                        name: "Neil Sims",
                        userEmail: "neilsims@gmail.com",
                        department: "Department",
                        status: "Active",
                      },
                      {
                        branches: "branch",
                        name: "Neil Sims",
                        userEmail: "neilsims@gmail.com",
                        department: "Department",
                        status: "Active",
                      },
                    ].map((user, i) => (
                      <tr
                        key={i}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td
                          scope="row"
                          className="flex items-center py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="pl-3">
                            <div className="text-sm font-semibold">
                              {user.name}
                            </div>
                            <div className="text-sm text-slate-500 font-semibold">
                              {user.userEmail}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">{user.branches}</td>
                        <td className="px-4 py-4">{user.department}</td>
                        <td className="px-4 py-4">{user.status}</td>

                        <td className="px-4 py-4">
                          <button
                            className="mt-4 inline-flex items-center text-gray-600 bg-gray-100 hover:bg-gray-200 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2"
                            type="button"
                          >
                            <span className="mx-auto font-semibold text-md">
                              View
                            </span>
                          </button>
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
                    <span className="text-2xl font-semibold">Locations</span>
                  </div>
                </div>
                <div>
                  <MapPinned />
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
              <div className="text-center">
                <div className="flex mb-4">
                  <p className="text-md font-semibold text-gray-400 text-center">
                    Current sprint requires stakeholders to approve newly
                    amended policies.
                  </p>
                </div>

                <button
                  className="mt-4 inline-flex items-center text-white bg-orange-600 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-3"
                  type="button"
                >
                  <span className="mx-auto font-semibold text-md">
                    Increase Users
                  </span>
                </button>
              </div>
              <hr className="mt-6 mb-1"></hr>
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <Dot className="h-12 w-12 text-blue-500" />{" "}
                  <span className="-ml-2">Active</span>
                </div>
                <div className="flex items-center">
                  <Dot className="h-12 w-12 text-green-500" />{" "}
                  <span className="-ml-2">Inactive</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
