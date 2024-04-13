
import { Profilepop } from "@/components/dashboard/profilepop";

function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <div className="p-7">
          <div className="flex justify-between">
              <p className="pt-2 text-center">
                This is just small example for authentication and authorization
              </p>
              <Profilepop/>
          </div>
      </div>
      <div className="border p-0.4"></div>
        <main>{children}</main>
      </>
    )
  }

export default DashboardLayout;
