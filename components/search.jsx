import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";
export function SearchComponent() {
  return (
    <div className="flex items-center gap-5 m-2">
      <Input
        type="search"
        placeholder="Search..."
        className="m-2 mt-2 p-3"
      />
      <Search />
    </div>
  )
}