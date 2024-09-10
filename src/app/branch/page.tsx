/** @format */
import Header from "@/components/Header";
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
      {/* BRANCHES PAGE */}
      <Header />
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
    </div>
  );
}
