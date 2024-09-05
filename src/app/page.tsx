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
  LayoutDashboard,
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
                      <div className="text-base font-semibold">{user.name}</div>
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

      {/* Add Company Page */}
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
            <section className="p-4 rounded-md shadow-xl mt-4">
              <div>
                <h1 className="text-2xl font-semibold">TECH TEAM</h1>
              </div>

              {/* Employee Cards Grid */}
              <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-4">
                <div className="dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow dark:bg-gray-800">
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
                      <h5 className="text-md font-bold tracking-tight text-gray-600 dark:text-white">
                        Active Employee
                      </h5>
                    </a>
                    <span className="text-xl font-semibold">30</span>
                  </div>
                </div>

                <div className="dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow dark:bg-gray-800">
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
                      <h5 className="text-md font-bold tracking-tight text-gray-600 dark:text-white">
                        Inactive Employee
                      </h5>
                    </a>
                    <span className="text-xl font-semibold">100</span>
                  </div>
                </div>

                <div className="dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow dark:bg-gray-800">
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
                      <h5 className="text-md font-bold tracking-tight text-gray-600 dark:text-white">
                        Total Employee
                      </h5>
                    </a>
                    <span className="text-xl font-semibold">60</span>
                  </div>
                </div>

                <div className="dark:border-gray-700 border-dashed max-w-sm bg-white border border-gray-200 p-4 rounded-lg shadow dark:bg-gray-800">
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
                      <h5 className="text-md font-bold tracking-tight text-gray-600 dark:text-white">
                        On Boarding
                      </h5>
                    </a>
                    <span className="text-xl font-semibold">50</span>
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
