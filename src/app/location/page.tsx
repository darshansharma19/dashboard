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
      <PageTitle title="Dashboard" />
      {/* <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section> */}
      {/* <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>
      </section> */}

      {/* COMPNAY PAGE */}
      <section>
        <section className="bg-transparent">
          <div>
            <h1 className="text-2xl font-semibold">COMPANIES</h1>
          </div>
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-6 gap-8">
            <div className="flex items-center p-4 dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
              <a href="#">
                <img
                  className="h-16 w-16"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnc6zc_B9F0jX5h5DQD5zksyoZL90NTDCZQ&s"
                  alt=""
                />
              </a>
              <div className="px-4">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    Active Company
                  </h5>
                </a>
                <span className="text-2xl font-bold">100</span>
              </div>
            </div>
            <div className="flex items-center p-4 dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
              <a href="#">
                <img
                  className="h-16 w-16"
                  src="https://cdn-icons-png.flaticon.com/512/514/514334.png"
                  alt=""
                />
              </a>
              <div className="px-4">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    Inactive Company
                  </h5>
                </a>
                <span className="text-2xl font-bold">20</span>
              </div>
            </div>
            <div className="flex items-center p-4 dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
              <a href="#">
                <img
                  className="h-16 w-16"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCADtBuxCjtgoMGyFzR3DdcmPhKjOQQb4Vogm3h_DyPZs1wNmGwEL3TgmjzcF56icBfU&usqp=CAU"
                  alt=""
                />
              </a>
              <div className="px-4">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                    Total Company
                  </h5>
                </a>
                <span className="text-2xl font-bold">120</span>
              </div>
            </div>
          </div>
        </section>
        <section>
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
                  <Plus className="h-4 w-4 mr-1" />
                  <span>Filter</span>
                </button>
                <button
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  <span>Export</span>
                </button>
                <button
                  className="inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                  type="button"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  <span>App Company</span>
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
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Authors
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Neil Sims",
                    CompanyName: "Tech Innovators Inc.",
                    technology: "HTML , React JS",
                    position: "React Developer",
                    progress: "75",
                    statusColor: "bg-green-500",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                  },
                  {
                    name: "Sam",
                    CompanyName: "Wipro",
                    technology: "CSS , React JS",
                    position: "Angular Developer",
                    progress: "75",
                    statusColor: "bg-blue-500",
                    image:
                      "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
                  },
                  {
                    name: "Jhon Sims",
                    CompanyName: "TCS.",
                    technology: "Bootstrap , React JS",
                    position: "Java Developer",
                    progress: "90",
                    statusColor: "bg-red-500",
                    image:
                      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
                  },
                  {
                    name: "Amayela",
                    CompanyName: "Innovators Inc.",
                    technology: "Node JS , React JS",
                    position: "Vue Developer",
                    progress: "40",
                    statusColor: "bg-yellow-500",
                    image:
                      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
                  },
                  {
                    name: "Makbool",
                    CompanyName: "Google  Inc.",
                    technology: "JS , Php",
                    position: "Next Developer",
                    progress: "99",
                    statusColor: "bg-orange",
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
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-lg"
                        src={user.image}
                        alt={`${user.name} image`}
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {user.name}
                        </div>
                        <div className="font-semibold text-gray-500">
                          {user.technology}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-base font-semibold">
                          {user.CompanyName}
                        </div>
                        <div className="font-semibold text-gray-500">
                          {user.position}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="mb-1">{i + 1}</div>
                      <div className="w-full bg-gray-300 rounded-full h-1">
                        <div
                          className="h-1 bg-red-500 rounded-full" // Tailwind CSS classes for height and border-radius
                          style={{
                            width: `${user.progress}%`,
                          }}
                        ></div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <ul className="flex space-x-3">
                        <li className="bg-slate-200 text-black p-2 rounded-lg">
                          <ToggleLeft className="h-4 w-4 cursor-pointer hover:text-blue-600 transition-all" />
                        </li>
                        <li className="bg-slate-200 text-black p-2 rounded-lg">
                          <Pencil className="h-4 w-4 cursor-pointer hover:text-green-600 transition-all" />
                        </li>
                        <li className="bg-slate-200 text-black p-2 rounded-lg">
                          <Trash2 className="h-4 w-4 cursor-pointer hover:text-red-600 transition-all" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>

      {/* Add COMPANY PAGE */}
      <div>
        <section>
          <div>
            <h1 className="text-2xl font-semibold mb-4">Add Company</h1>
          </div>

          <hr className="h-0.4 bg-slate-300 w-full mb-2"></hr>

          <div>
            <form className="max-w-full">
              {/* Company Logo */}
              <div className="grid grid-cols-[250px_1fr] mb-4">
                <div>
                  <h2 className="text-md font-medium">Company Logo</h2>
                </div>
                <div>
                  <div className="inline-block w-20 h-20 relative">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZVg9HLBprFu881VNNn6xJWoTWb4-l6S88SkpkiydYMigp0IztlnHB2uCNCHB6qXuvUQ&usqp=CAU"
                      alt="Icon"
                      className="w-full h-full rounded-lg"
                    />
                    <div className="flex items-center absolute -bottom-2 -right-0">
                      <X className="h-4 w-4 text-gray-400 bg-slate-200 p-0.5 cursor-pointer" />
                      <Pencil className="ml-2 h-4 w-4 text-gray-400 bg-slate-200 p-0.5 cursor-pointer" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[12px] font-semibold text-gray-400">
                      Allowed File types: png, jpg, jpeg.
                    </span>
                  </div>
                </div>
              </div>
              {/* Company Full Name */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div className="flex">
                  <h2 className="text-md font-medium">Company Full Name</h2>
                  <span className="ml-1 text-red-500">*</span>
                </div>
                <div className="grid grid-cols-2 gap-3.5 min-w-full">
                  <div className="max-w-full">
                    <input
                      type="text"
                      id="base-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Eco Build"
                    />
                  </div>
                  <div className="max-w-full">
                    <input
                      type="text"
                      id="base-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Ltd."
                    />
                  </div>
                </div>
              </div>

              {/* Company Type */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div className="flex">
                  <h2 className="text-md font-medium">Company Type</h2>
                  <span className="ml-1 text-red-500">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Kneethemes"
                  />
                </div>
              </div>

              {/* Contact Phone */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div className="flex">
                  <h2 className="text-md font-medium">Contact Phone</h2>
                  <span className="ml-1 text-red-500">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="044 3276 454 935"
                  />
                </div>
              </div>

              {/* Company Site */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div className="flex">
                  <h2 className="text-md font-medium">Company Site</h2>
                  <span className="ml-1 text-red-500">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 text-red-900 text-sm rounded-lg w-full p-2.5"
                    placeholder="Kneethemes.com"
                  />
                </div>
              </div>

              {/* Country Input */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div className="flex">
                  <h2 className="text-md font-medium">Country</h2>
                  <span className="ml-1 text-red-500">*</span>
                </div>
                <div>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled selected>
                      Select a country...
                    </option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                  </select>
                </div>
              </div>

              {/* Industry Input */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div className="flex">
                  <h2 className="text-md font-medium">Industry</h2>
                  <span className="ml-1 text-red-500">*</span>
                </div>
                <div>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled selected>
                      Select Industry
                    </option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                  </select>
                  <span className="text-[10px] font-medium text-gray-500">
                    Please select a preferred Industry
                  </span>
                </div>
              </div>

              {/* Address Input */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div className="flex">
                  <h2 className="text-md font-medium">Address</h2>
                  <span className="ml-1 text-red-500">*</span>
                </div>
                <div>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-gray-300 text-sm"
                    >
                      38k/23 altams plaza...
                    </option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div>
                  <h2 className="text-md font-medium">Description</h2>
                </div>
                <div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Describe your company ..."
                  />
                </div>
              </div>

              {/* Communication */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div className="flex">
                  <h2 className="text-md font-medium">Communication</h2>
                  <span className="ml-1 text-red-500">*</span>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email
                    </label>
                  </div>

                  <div className="flex items-center ml-4 mb-4">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Phone
                    </label>
                  </div>
                </div>
              </div>

              {/* Allow Updates */}
              <div className="grid grid-cols-[250px_1fr] items-center mb-4">
                <div>
                  <h2 className="text-md font-medium">Allow Updates</h2>
                </div>
                <div>
                  <label className="inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600"></div>
                  </label>
                </div>
              </div>

              <hr className="h-0.5 bg-slate-300 w-full mb-5"></hr>

              {/* Buttons */}
              <div className="flex flex-row-reverse">
                <div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add Company
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-gray-600 bg-gray-200 hover:text-gray-500 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 text-center dark:bg-gray-400 dark:hover:bg-gray-400"
                  >
                    Discard
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* TECH TEAM PAGE */}
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

      {/* Non TECH TEAM PAGE */}
      <section>
        <div className="grid grid-cols-[70%_30%] gap-4">
          {/* Left Column */}
          <div>
            <section className="p-4 rounded-md mt-4">
              <div>
                <h1 className="text-2xl font-semibold">NON TECH TEAM</h1>
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
                    Progress of Non Tech
                  </h2>
                  <span className="font-semibold text-sm text-slate-400">
                    See progress
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

      {/* BRANCHES PAGE */}
      <section>
        <div className="grid grid-cols-[45%_55%] gap-4">
          {/* Left Column */}
          <div>
            <section className="py-4 rounded-md mt-4">
              <div>
                <h1 className="text-2xl font-semibold">BRANCHES</h1>
              </div>

              {/* Employee Cards Grid */}
              <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-2 gap-4">
                <div className="dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-md font-semibold -mb-1">Branch 1</h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        Location
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
                  <img
                    className="w-28 h-28 rounded-lg p-4 mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mfL1ozSvu6uOYLG5f3zGpMxHS5oDj62JoA&s"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-[12px] font-semibold -mb-1">Size</h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        15 Floor
                      </span>
                    </div>
                    <div>
                      <h2 className="text-[12px] font-semibold -mb-1">Type:</h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        Apartment
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-md font-semibold -mb-1">Branch 2</h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        Location
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
                  <img
                    className="w-28 h-28 rounded-lg p-4 mx-auto"
                    src="https://media.istockphoto.com/id/1450273787/vector/office-building-isometric-icon-concept-and-three-dimensional-design-company-corporate.jpg?b=1&s=170x170&k=20&c=7nAf7twQVmgQsDj4x2_yHNQkGdkARgStpQFLBHLjOpU="
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-[12px] font-semibold -mb-1">Size</h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        15 Floor
                      </span>
                    </div>
                    <div>
                      <h2 className="text-[12px] font-semibold -mb-1">Type:</h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        Apartment
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow-lg dark:bg-gray-800">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-md font-semibold -mb-1">Branch 3</h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        Location
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
                  <img
                    className="w-28 h-28 rounded-lg p-4 mx-auto"
                    src="https://cdn-icons-png.freepik.com/256/353/353893.png?semt=ais_hybrid"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-[12px] font-semibold -mb-1">Size</h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        15 Floor
                      </span>
                    </div>
                    <div>
                      <h2 className="text-[12px] font-semibold -mb-1">Type:</h2>
                      <span className="font-semibold text-[12px] text-slate-400">
                        Apartment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Chart Section */}
            <section className="p-4 rounded-md shadow-xl mt-4">
              <div className="flex items-center">
                <div>
                  <Building2 />
                </div>
                <div>
                  <h2 className="text-xl font-semibold -mb-1 ml-4">
                    Total Branch Locations
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-center h-full py-6">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                    width="100%"
                    height="350"
                  ></iframe>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                    width="100%"
                    height="350"
                  ></iframe>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Table Section */}
            <section className="p-2 rounded-md shadow-xl mt-4">
              <div className="relative overflow-x-auto sm:rounded-lg">
                <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                  <div className="">{/* Empty For Now */}</div>
                  <div className="flex gap-2">
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
                      <Plus className="h-4 w-4 mr-2" />
                      <span>Add New Branch</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-md font-semibold -mb-1">
                      Member Statistics
                    </h2>
                    <span className="font-semibold text-[12px] text-slate-400">
                      Over 500 new members
                    </span>
                  </div>
                  <div>
                    <LayoutDashboard className="text-blue-500" />
                  </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="pr-2 py-3 text-[10px]">
                        Branch Name
                      </th>
                      <th scope="col" className="pr-2 pl-4 py-3 text-[10px]">
                        Branch Code
                      </th>
                      <th scope="col" className="pr-2 py-3 text-[10px]">
                        Branch Location
                      </th>
                      <th scope="col" className="pr-2 py-3 text-[10px]">
                        Contact
                      </th>
                      <th scope="col" className="pr-2 py-3 text-[10px]">
                        Rating
                      </th>
                      <th scope="col" className="pr-2 py-3 text-[10px]">
                        {/* Empty Now */}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        branchCode: "10080",
                        branchHashCode: "#####",
                        branchName: "Neil Sims",
                        branchEmail: "neilsims@gmail.com",
                        branchLocation: "India",
                        branchContact: "090989998",
                        branchContactProfile: "CEO",
                        branchLocationValue: "Paid",
                        rating: "Best Rated",
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                      },
                      {
                        branchCode: "10080",
                        branchHashCode: "#####",
                        branchName: "Neil Sims",
                        branchEmail: "neilsims@gmail.com",
                        branchLocation: "India",
                        branchContact: "090989998",
                        branchContactProfile: "CEO",
                        branchLocationValue: "Paid",
                        rating: "Best Rated",
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                      },
                      {
                        branchCode: "10080",
                        branchHashCode: "#####",
                        branchName: "Neil Sims",
                        branchEmail: "neilsims@gmail.com",
                        branchLocation: "India",
                        branchContact: "090989998",
                        branchContactProfile: "CEO",
                        branchLocationValue: "Paid",
                        rating: "Best Rated",
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                      },
                      {
                        branchCode: "10080",
                        branchHashCode: "#####",
                        branchName: "Neil Sims",
                        branchEmail: "neilsims@gmail.com",
                        branchLocation: "India",
                        branchContact: "090989998",
                        branchContactProfile: "CEO",
                        branchLocationValue: "Paid",
                        rating: "Best Rated",
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                      },
                      {
                        branchCode: "10080",
                        branchHashCode: "#####",
                        branchName: "Neil Sims",
                        branchEmail: "neilsims@gmail.com",
                        branchLocation: "India",
                        branchContact: "090989998",
                        branchContactProfile: "CEO",
                        branchLocationValue: "Paid",
                        rating: "Best Rated",
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                      },
                      {
                        branchCode: "10080",
                        branchHashCode: "#####",
                        branchName: "Neil Sims",
                        branchEmail: "neilsims@gmail.com",
                        branchLocation: "India",
                        branchContact: "090989998",
                        branchContactProfile: "CEO",
                        branchLocationValue: "Paid",
                        rating: "Best Rated",
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                      },
                      {
                        branchCode: "10080",
                        branchHashCode: "#####",
                        branchName: "Neil Sims",
                        branchEmail: "neilsims@gmail.com",
                        branchLocation: "India",
                        branchContact: "090989998",
                        branchContactProfile: "CEO",
                        branchLocationValue: "Paid",
                        rating: "Best Rated",
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
                      },
                      {
                        branchCode: "10080",
                        branchHashCode: "#####",
                        branchName: "Neil Sims",
                        branchEmail: "neilsims@gmail.com",
                        branchLocation: "India",
                        branchContact: "090989998",
                        branchContactProfile: "CEO",
                        branchLocationValue: "Paid",
                        rating: "Best Rated",
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
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
                          <img
                            className="w-10 h-10 rounded-lg"
                            src={user.image}
                            alt={`${user.image} image`}
                          />
                          <div className="pl-3">
                            <div className="text-sm font-semibold">
                              {user.branchName}
                            </div>
                            <div className="text-[12px] font-semibold">
                              {user.branchEmail}
                            </div>
                          </div>
                        </td>
                        <td className="pl-4 pr-2 py-4 text-[12px]">
                          <span className="font-semibold">
                            {user.branchCode}
                          </span>{" "}
                          <br></br>
                          {user.branchHashCode}
                        </td>
                        <td className="pr-2 py-4 text-[12px]">
                          <span className="font-semibold">
                            {user.branchLocation}
                          </span>{" "}
                          <br></br>
                          {user.branchLocationValue}
                        </td>
                        <td className="pr-2 py-4 text-[12px]">
                          <span className="font-semibold">
                            {user.branchContact}
                          </span>{" "}
                          <br></br>
                          {user.branchContactProfile}
                        </td>

                        <td className="pr-2 py-4">
                          <div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500" />
                            </div>
                            <div className="text-[10px]">{user.rating}</div>
                          </div>
                        </td>

                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <button
                              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                            >
                              <span>View</span>
                            </button>
                            <button
                              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                            >
                              <span>Edit</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* TEAMS PAGE */}
      <section>
        <div className="grid grid-cols-[75%_25%] gap-4">
          {/* Left Column */}
          <div>
            <section className="rounded-md mt-4">
              <div>
                <h1 className="text-2xl font-semibold">TEAMS</h1>
              </div>

              {/* Employee Cards Grid */}
              <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4 gap-4">
                <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 px-4 py-6 rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                    alt=""
                  />
                  <div className="mx-auto mt-2">
                    <a href="#">
                      <h5 className="text-sm font-bold tracking-tight mt-3 -mb-1 text-gray-600 dark:text-white">
                        Team Mustafa
                      </h5>
                    </a>
                    <span className="text-[14px] text-gray-400">
                      CEO@gmail.com
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      className="mt-4 inline-flex items-center text-gray-800 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Edit</span>
                    </button>
                    <button
                      className="mt-4 inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 px-4 py-6 rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                    alt=""
                  />
                  <div className="mx-auto mt-2">
                    <a href="#">
                      <h5 className="text-sm font-bold tracking-tight mt-3 -mb-1 text-gray-600 dark:text-white">
                        Team Mustafa
                      </h5>
                    </a>
                    <span className="text-[14px] text-gray-400">
                      CEO@gmail.com
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      className="mt-4 inline-flex items-center text-gray-800 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Edit</span>
                    </button>
                    <button
                      className="mt-4 inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 px-4 py-6 rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                    alt=""
                  />
                  <div className="mx-auto mt-2">
                    <a href="#">
                      <h5 className="text-sm font-bold tracking-tight mt-3 -mb-1 text-gray-600 dark:text-white">
                        Team Mustafa
                      </h5>
                    </a>
                    <span className="text-[14px] text-gray-400">
                      CEO@gmail.com
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      className="mt-4 inline-flex items-center text-gray-800 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Edit</span>
                    </button>
                    <button
                      className="mt-4 inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 px-4 py-6 rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                    alt=""
                  />
                  <div className="mx-auto mt-2">
                    <a href="#">
                      <h5 className="text-sm font-bold tracking-tight mt-3 -mb-1 text-gray-600 dark:text-white">
                        Team Mustafa
                      </h5>
                    </a>
                    <span className="text-[14px] text-gray-400">
                      CEO@gmail.com
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      className="mt-4 inline-flex items-center text-gray-800 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Edit</span>
                    </button>
                    <button
                      className="mt-4 inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 px-4 py-6 rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                    alt=""
                  />
                  <div className="mx-auto mt-2">
                    <a href="#">
                      <h5 className="text-sm font-bold tracking-tight mt-3 -mb-1 text-gray-600 dark:text-white">
                        Team Mustafa
                      </h5>
                    </a>
                    <span className="text-[14px] text-gray-400">
                      CEO@gmail.com
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      className="mt-4 inline-flex items-center text-gray-800 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Edit</span>
                    </button>
                    <button
                      className="mt-4 inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 px-4 py-6 rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                    alt=""
                  />
                  <div className="mx-auto mt-2">
                    <a href="#">
                      <h5 className="text-sm font-bold tracking-tight mt-3 -mb-1 text-gray-600 dark:text-white">
                        Team Mustafa
                      </h5>
                    </a>
                    <span className="text-[14px] text-gray-400">
                      CEO@gmail.com
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      className="mt-4 inline-flex items-center text-gray-800 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Edit</span>
                    </button>
                    <button
                      className="mt-4 inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 px-4 py-6 rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                    alt=""
                  />
                  <div className="mx-auto mt-2">
                    <a href="#">
                      <h5 className="text-sm font-bold tracking-tight mt-3 -mb-1 text-gray-600 dark:text-white">
                        Team Mustafa
                      </h5>
                    </a>
                    <span className="text-[14px] text-gray-400">
                      CEO@gmail.com
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      className="mt-4 inline-flex items-center text-gray-800 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Edit</span>
                    </button>
                    <button
                      className="mt-4 inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 px-4 py-6 rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                    alt=""
                  />
                  <div className="mx-auto mt-2">
                    <a href="#">
                      <h5 className="text-sm font-bold tracking-tight mt-3 -mb-1 text-gray-600 dark:text-white">
                        Team Mustafa
                      </h5>
                    </a>
                    <span className="text-[14px] text-gray-400">
                      CEO@gmail.com
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      className="mt-4 inline-flex items-center text-gray-800 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Edit</span>
                    </button>
                    <button
                      className="mt-4 inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="dark:border-gray-700 text-blue-500 border-dashed max-w-sm bg-white border border-gray-200 px-4 py-6 rounded-lg shadow-lg dark:bg-gray-800 text-center">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                    alt=""
                  />
                  <div className="mx-auto mt-2">
                    <a href="#">
                      <h5 className="text-sm font-bold tracking-tight mt-3 -mb-1 text-gray-600 dark:text-white">
                        Team Mustafa
                      </h5>
                    </a>
                    <span className="text-[14px] text-gray-400">
                      CEO@gmail.com
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                    <div className="inline-block p-2 border-dashed border-2 text-start">
                      <h3 className="font-bold text-[12px] text-gray-800 -mb-2">
                        Team Member
                      </h3>
                      <span className="font-semibold text-gray-400 text-[12px]">
                        15
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      className="mt-4 inline-flex items-center text-gray-800 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Edit</span>
                    </button>
                    <button
                      className="mt-4 inline-flex items-center text-white bg-red-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                      type="button"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span className="mx-auto">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Top Employee Section */}
            <section className="p-4 rounded-md shadow-xl">
              <div className="mb-6">
                <div className="flex justify-between items-center my-auto">
                  <div className="flex flex-col">
                    <div className="flex items-center -mb-1">
                      <span className="text-sm font-semibold">
                        Recommended for you
                      </span>
                    </div>
                    <span className="font-semibold text-[12px] text-slate-400">
                      create a team with ...
                    </span>
                  </div>
                  <div>
                    <button
                      className="inline-flex items-center hover:bg-gray-300 text-gray-800 bg-gray-200 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-2"
                      type="button"
                    >
                      <span className="mx-auto text-gray-600 text-[12px]">
                        Top Employees
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center my-3">
                  <div className="flex">
                    <div className="p-2 h-8 w-8 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                      <span>S</span>
                    </div>
                    <div className="ml-2">
                      <div>
                        <h2 className="text-sm font-semibold -mb-1">
                          Saket Verma
                        </h2>
                        <span className="font-semibold text-[12px] text-slate-400">
                          300+ joined
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div className="flex">
                    <div className="p-2 h-8 w-8 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                      <span>S</span>
                    </div>
                    <div className="ml-2">
                      <div>
                        <h2 className="text-sm font-semibold -mb-1">
                          Saket Verma
                        </h2>
                        <span className="font-semibold text-[12px] text-slate-400">
                          300+ joined
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ChevronRight />
                  </div>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div className="flex">
                    <div className="p-2 h-8 w-8 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                      <span>S</span>
                    </div>
                    <div className="ml-2">
                      <div>
                        <h2 className="text-sm font-semibold -mb-1">
                          Saket Verma
                        </h2>
                        <span className="font-semibold text-[12px] text-slate-400">
                          300+ joined
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ChevronRight />
                  </div>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div className="flex">
                    <div className="p-2 h-8 w-8 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                      <span>S</span>
                    </div>
                    <div className="ml-2">
                      <div>
                        <h2 className="text-sm font-semibold -mb-1">
                          Saket Verma
                        </h2>
                        <span className="font-semibold text-[12px] text-slate-400">
                          300+ joined
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ChevronRight />
                  </div>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div className="flex">
                    <div className="p-2 h-8 w-8 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                      <span>S</span>
                    </div>
                    <div className="ml-2">
                      <div>
                        <h2 className="text-sm font-semibold -mb-1">
                          Saket Verma
                        </h2>
                        <span className="font-semibold text-[12px] text-slate-400">
                          300+ joined
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ChevronRight />
                  </div>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div className="flex">
                    <div className="p-2 h-8 w-8 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                      <span>S</span>
                    </div>
                    <div className="ml-2">
                      <div>
                        <h2 className="text-sm font-semibold -mb-1">
                          Saket Verma
                        </h2>
                        <span className="font-semibold text-[12px] text-slate-400">
                          300+ joined
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ChevronRight />
                  </div>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div className="flex">
                    <div className="p-2 h-8 w-8 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                      <span>S</span>
                    </div>
                    <div className="ml-2">
                      <div>
                        <h2 className="text-sm font-semibold -mb-1">
                          Saket Verma
                        </h2>
                        <span className="font-semibold text-[12px] text-slate-400">
                          300+ joined
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 rounded-md shadow-xl mt-4">
              <div className="">
                <div className="flex justify-between items-center my-auto">
                  <div className="flex items-center">
                    <div className="p my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                      <img
                        className="h-12 w-12 rounded-md"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eNmyohNd4EluzV7GKzZoFvcl-ahjX0XO0Q&s"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <div>
                        <h2 className="text-sm font-semibold -mb-1">
                          Grace Logan
                        </h2>
                        <span className="font-semibold text-[12px] text-slate-400">
                          Yesterday at 5:06 PM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
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
                </div>
                <div>
                  <p className="text-sm text-gray-400 mt-6">
                    Lorem ipsum dolort. te fugiat excepturi assumenda veritatis
                    dolorem ipsum ullam earum delectus placeat dolore sequi.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 h-full mt-6">
                  <div>
                    <img
                      className="h-full w-full rounded-md"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHbCJ_mWD8WQDA6_JQ_IQOnWUmdRCNX1bJpGDRTe-DFzEGXcQ1NrCkh1r0FpoHarCSLA&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <img
                        className="h-full w-full rounded-md"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfGiqyrNH2CRP2cafQK95EhtFPoCxcx_D2zOjqDNtcL-EfzL9wLn48m-e8b4yRuiSXSA&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="h-full w-full rounded-md"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaYPWm-MCQW2qWgMGBarcdRtGb3gYR0KllYV2i6fev38xWzQFtBPqSl51E1uuiZLJcQg&usqp=CAU"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-2 my-4 border-t border-t-dashed border-t-gray-400 border-b border-b-dashed border-b-gray-400 flex items-center">
                    <div className="flex items-center pl-2 cursor-pointer">
                      <MessageSquareText className="h-4 w-4 mr-1 text-gray-500 font-bold" />
                      <span className="text-gray-500 font-semibold text-[12px]">
                        {2} Comments
                      </span>
                    </div>
                    <div className="flex items-center pl-2 cursor-pointer">
                      <Heart className="h-4 w-4 mr-1 text-gray-500 font-bold" />
                      <span className="text-gray-500 font-semibold text-[12px]">
                        {47}k Likes
                      </span>
                    </div>
                    <div className="flex items-center pl-2 cursor-pointer">
                      <BookMarked className="h-4 w-4 mr-1 text-gray-500 font-bold" />
                      <span className="text-gray-500 font-semibold text-[12px]">
                        {900} Saves
                      </span>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="flex items-center">
                      <div className="p-2 min-h-12 min-w-12 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                        <span>S</span>
                      </div>
                      <div className="">
                        <div className="ml-2 flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <h2 className="text-sm font-semibold mr-2">
                              Saket Verma
                            </h2>
                            <span className="font-semibold text-[10px] text-slate-400">
                              1 Day ago
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500 font-semibold text-[10px]">
                              Reply
                            </span>
                          </div>
                        </div>
                        <div className="ml-2">
                          <p className="text-gray-500 text-[10px] font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Provident nemo neque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="flex items-center">
                      <div className="p-2 min-h-12 min-w-12 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                        <span>S</span>
                      </div>
                      <div className="">
                        <div className="ml-2 flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <h2 className="text-sm font-semibold mr-2">
                              Saket Verma
                            </h2>
                            <span className="font-semibold text-[10px] text-slate-400">
                              1 Day ago
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500 font-semibold text-[10px]">
                              Reply
                            </span>
                          </div>
                        </div>
                        <div className="ml-2">
                          <p className="text-gray-500 text-[10px] font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Provident nemo neque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="flex items-center">
                      <div className="p-2 min-h-12 min-w-12 my-auto bg-red-500 text-gray-50 rounded-md flex justify-center items-center">
                        <span>S</span>
                      </div>
                      <div className="">
                        <div className="ml-2 flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <h2 className="text-sm font-semibold mr-2">
                              Saket Verma
                            </h2>
                            <span className="font-semibold text-[10px] text-slate-400">
                              1 Day ago
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500 font-semibold text-[10px]">
                              Reply
                            </span>
                          </div>
                        </div>
                        <div className="ml-2">
                          <p className="text-gray-500 text-[10px] font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Provident nemo neque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

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
