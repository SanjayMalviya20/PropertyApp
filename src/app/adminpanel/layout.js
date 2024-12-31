import Adminsidebar from "@/components/adminsidebar";

export default function layout({children}){

    return(
        <>
        <div className="flex h-screen gap-11 w-full">
            <div>
        <Adminsidebar/>
            </div>
        {children}
        </div>
        </>
    )

}