/** @format */

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
    </div>
  );
}
