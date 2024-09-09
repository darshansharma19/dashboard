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
      {/* Building PAGE */}
      <section>
      <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-semibold">BUILDINGS</h1>
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
                <span>App New Building</span>
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
                        <span>Add Building</span>
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
                          Building Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Building Code
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Branch Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Location
                        </th>
                        <th scope="col" className="px-4 py-3">
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
                          buildingCode: "10900",
                          buildingName: "Neil Sims",
                          buildingLocation: "Neil Sims",
                          branchName: "Neil Sims",
                          image:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                        },
                        {
                          buildingCode: "10900",
                          buildingName: "Neil Sims",
                          buildingLocation: "Neil Sims",
                          branchName: "Neil Sims",
                          image:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                        },
                        {
                          buildingCode: "10900",
                          buildingName: "Neil Sims",
                          buildingLocation: "Neil Sims",
                          branchName: "Neil Sims",
                          image:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                        },
                        {
                          buildingCode: "10900",
                          buildingName: "Neil Sims",
                          buildingLocation: "Neil Sims",
                          branchName: "Neil Sims",
                          image:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                        },
                        {
                          buildingCode: "10900",
                          buildingName: "Neil Sims",
                          buildingLocation: "Neil Sims",
                          branchName: "Neil Sims",
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
                            className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <img
                              className="w-10 h-10 rounded-lg mr-2"
                              src={user.image}
                              alt={`${user.image} image`}
                            />
                            {user.buildingName}
                          </td>
                          <td className="px-4 py-4">{user.buildingCode}</td>
                          <td className="px-4 py-4">{user.branchName}</td>
                          <td className="px-4 py-4">{user.buildingLocation}</td>
                          <td className="px-4 py-4">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500" />
                            </div>
                          </td>

                          <td className="px-4 py-4">
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
                      Active Building
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
                      Inactive Building
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
                      On Build
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
                      Total Building
                    </h5>
                  </a>
                  <span className="text-xl font-semibold text-red-500">40</span>
                </div>
              </div>
            </div>

            <section className=" rounded-md shadow-xl mt-4 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div className="">
                <div className="relative dark:border-gray-700 text-gray-50 -z-10 border-dashed max-w-sm border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
                  <div className="flex justify-between items-center w-full absolute top-0 px-4 pt-4">
                    <div>
                      <h2 className="text-sm font-semibold -mb-1">
                        Performance Metrics
                      </h2>
                    </div>
                    <div>
                      <LayoutDashboard className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="h-36 w-full bg-[#EC623C] rounded-xl"></div>
                </div>
                <div className="container w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 -mt-8 px-2">
                  <div className="dark:border-gray-700 text-blue-500 bg-[#FFF8DD] border-dashed max-w-sm border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
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
                        <h5 className="text-sm font-semibold tracking-tight mt-3 text-gray-600 dark:text-white">
                          Occupancy
                        </h5>
                      </a>
                    </div>
                  </div>

                  <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-[#EEF6FF] border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
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
                      className="lucide lucide-briefcase-business"
                    >
                      <path d="M12 12h.01" />
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                    <div>
                      <a href="#">
                        <h5 className="text-sm font-semibold mt-3 tracking-tight text-gray-600 dark:text-white">
                          Revenue
                        </h5>
                      </a>
                    </div>
                  </div>

                  <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-[#FFF5F8] border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
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
                      className="lucide lucide-database"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                      <path d="M3 12A9 3 0 0 0 21 12" />
                    </svg>
                    <div>
                      <a href="#">
                        <h5 className="text-sm font-semibold mt-3 tracking-tight text-gray-600 dark:text-white">
                          Records
                        </h5>
                      </a>
                    </div>
                  </div>

                  <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-[#E8FFF3] border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
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
                      className="lucide lucide-construction"
                    >
                      <rect x="2" y="6" width="20" height="8" rx="1" />
                      <path d="M17 14v7" />
                      <path d="M7 14v7" />
                      <path d="M17 3v3" />
                      <path d="M7 3v3" />
                      <path d="M10 14 2.3 6.3" />
                      <path d="m14 6 7.7 7.7" />
                      <path d="m8 6 8 8" />
                    </svg>
                    <div>
                      <a href="#">
                        <h5 className="text-sm font-semibold mt-3 tracking-tight text-gray-600 dark:text-white">
                          Maintenance
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center my-3 px-2">
                  <div className="ml-2">
                    <div>
                      <h2 className="text-sm font-semibold -mb-1">
                        Branch Status
                      </h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        56 active branchs
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span>View All</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className=" border-b border-gray-200 dark:border-gray-700">
                    <ul
                      className="flex flex-wrap -mb-px text-sm font-medium text-center"
                      id="default-tab"
                      data-tabs-toggle="#default-tab-content"
                      role="tablist"
                    >
                      <li className="me-2" role="presentation">
                        <button
                          className="inline-block p-4 border-b-2 rounded-t-lg"
                          id="profile-tab-1"
                          data-tabs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Profile
                        </button>
                      </li>
                      <li className="me-2" role="presentation">
                        <button
                          className="inline-block p-4 border-b-2 rounded-t-lg"
                          id="profile-tab-2"
                          data-tabs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Profile
                        </button>
                      </li>
                      <li className="me-2" role="presentation">
                        <button
                          className="inline-block p-4 border-b-2 rounded-t-lg"
                          id="profile-tab-3"
                          data-tabs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Profile
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div id="default-tab-content">
                    <div
                      className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab-1"
                    >
                      <div>
                        <p>jhgchtdgbvvjh</p>
                      </div>
                    </div>
                    <div
                      className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab-2"
                    >
                      <div>
                        <p>jhgchtdgbvvjh</p>
                      </div>
                    </div>
                    <div
                      className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab-3"
                    >
                      <div>
                        <p>jhgchtdgbvvjh</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex border-b-2 py-2">
                      <div className="p-2 my-auto rounded-md flex justify-center items-center">
                        <CircleDot className="h-4 w-4 text-green-700" />
                      </div>
                      <div className="ml-2">
                        <div>
                          <h2 className="text-[10px] text-purple-700 font-semibold -mb-1">
                            Building
                          </h2>
                          <span className="font-semibold text-[12px] text-slate-00">
                            Cameron Williamson
                          </span>
                          <p className="font-semibold text-[10px] text-slate-400">
                            3891 Ranchview Dr. Richardon, California 6238
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex border-b-2 py-2">
                      <div className="p-2 my-auto rounded-md flex justify-center items-center">
                        <CircleDot className="h-4 w-4 text-green-700" />
                      </div>
                      <div className="ml-2">
                        <div>
                          <h2 className="text-[10px] text-purple-700 font-semibold -mb-1">
                            Building
                          </h2>
                          <span className="font-semibold text-[12px] text-slate-00">
                            Cameron Williamson
                          </span>
                          <p className="font-semibold text-[10px] text-slate-400">
                            3891 Ranchview Dr. Richardon, California 6238
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex border-b-2 py-2">
                      <div className="p-2 my-auto rounded-md flex justify-center items-center">
                        <CircleDot className="h-4 w-4 text-green-700" />
                      </div>
                      <div className="ml-2">
                        <div>
                          <h2 className="text-[10px] text-purple-700 font-semibold -mb-1">
                            Building
                          </h2>
                          <span className="font-semibold text-[12px] text-slate-00">
                            Cameron Williamson
                          </span>
                          <p className="font-semibold text-[10px] text-slate-400">
                            3891 Ranchview Dr. Richardon, California 6238
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
