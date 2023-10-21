"use client"

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import Link from "next/link";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type SidebarProps = {
    children: React.ReactNode;
}
export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true)
  const [position, setPosition] = useState("bottom")
  
  return (
    <aside className="h-screen w-max max-w-full">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
                {/* <img
                    src="https://img.logoipsum.com/243.svg"
                    className={`overflow-hidden transition-all ${
                    expanded ? "w-32" : "w-0"
                    }`}
                    alt=""
                /> */}
                <p className={`text-xl font-black ${expanded? "" : "w-0 overflow-hidden" }`}>Canales Solutions</p>
                <button
                    onClick={() => setExpanded((curr) => !curr)}
                    className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                >
                    {expanded ? <ChevronFirst /> : <ChevronLast />}
                </button>
            </div>

            <ul className="flex-1 px-3 group" data-visible={expanded}>{children}</ul>

            <div className="border-t flex p-3">
                <img
                    src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Juan+Canales"
                    alt=""
                    className="w-10 h-10 rounded-md"
                />
                <div
                    className={`
                    flex justify-between items-center
                    overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
                `}
                >
                  <div className="leading-4">
                      <h4 className="font-semibold">Juan Canales</h4>
                      <span className="text-xs text-gray-600">info@canales-solutions.de</span>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="border-0 rounded-full"><MoreVertical size={20} /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
            </div>
        </nav>
    </aside>
  )
}

type SidebarItemProps = {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    alert?: boolean;
    href?: string;
}
export function SidebarItem({ icon, text, active, alert, href }: SidebarItemProps) {
    return (
      <li>
        <Link
          className={`
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group
            ${
              active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
            }
          `}
          href={href? href : "/"} target={href? "_blank" : ""}
        >
          {icon}
          <span
            className={`overflow-hidden transition-all 
            group-data-[visible=true]:w.52 group-data-[visible=true]:ml-3 group-data-[visible=false]:w-0
            `}
          >
            {text}
          </span>
          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 
              group-data-[visible=false]:top-2
              `}
            />
          )}

          <div
            className={`
              absolute left-full rounded-md px-2 py-1 ml-6
              bg-indigo-100 text-indigo-800 text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
            {text}
          </div>
        </Link>
      </li>
    )
}