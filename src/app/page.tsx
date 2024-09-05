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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
    </div>
  );
}
