"use client"

import { DataTableDemo } from "@/components/data-table/data-table";
import { UserTableColumn, type UserTableDataType } from "@/components/data-table/user-table-column";
import { useRouter } from "next/navigation";

const data: UserTableDataType[] = [
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
]

const UniversalPage = () => {
  const router = useRouter();

  const onClickUser = (userId: string) => {
    router.push(`/users/details?id=${userId}`)
  }

  return (
    <div className="flex-1 space-y-4 overflow-y-auto">
      <div className="overflow-hidden bg-background shadow">
        <div className="h-full flex-1 flex-col md:flex">
          <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">Karma</p>
          <DataTableDemo data={data} columns={UserTableColumn} onClickHandler={onClickUser} filterKey="email" title='Users' />
        </div>
      </div>
    </div>
  )
}

export default UniversalPage;