import { Input } from "@/components/ui/input"
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'
export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="m-2 mt-2 p-3"
      />
    </div>
  )
}