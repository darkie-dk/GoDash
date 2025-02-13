import { Textarea } from '@/components/ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Italic, Underline } from 'lucide-react'

export function TextArea() {
  return (
    <div className="flex flex-col justify-end gap-2">
      <ToggleTextVariant />
      <Textarea placeholder="Write Here...." />
    </div>
  )
}

export function ToggleTextVariant() {
  return (
    <ToggleGroup
      type="multiple"
      size="sm"
      className="items-end"
      variant="outline"
    >
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
