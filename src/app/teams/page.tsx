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
    </div>
  );
}
