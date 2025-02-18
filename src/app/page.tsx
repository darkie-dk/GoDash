import { InputControl, InputPrefix, InputRoot } from '@/components/Form/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { OrdersTabs } from '@/components/OrdersTabs'

import { LuMail } from 'react-icons/lu'
import * as FileInput from '@/components/Form/FileInput'
import { TextArea } from '@/components/Form/TextArea'
import { Button } from '@/components/Button'

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-slate-700">Orders</h1>

      <OrdersTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <h2 className="text text-lg font-medium text-slate-800">
              Personal Info
            </h2>
            <span className="text-sm text-slate-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-slate-200"
        >
          <div className="grid grid-cols-form items-center gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-slate-700"
            >
              Nome comercial
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl
                  id="firstName"
                  defaultValue="Keven"
                ></InputControl>
              </InputRoot>
              <InputRoot>
                <InputControl
                  id="firstName"
                  defaultValue="Tavares"
                ></InputControl>
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <InputRoot>
              <InputPrefix>
                <LuMail className="h-5 w-5 text-slate-500" />
              </InputPrefix>
              <InputControl
                id="email"
                defaultValue="Kevendaniel.kd@gmail.com"
                type="email"
              ></InputControl>
            </InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-slate-700"
            >
              Business profile photo
              <span className="mt-0.5 block text-sm font-normal text-slate-500">
                This will be displayed on the profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Control />
              <FileInput.Trigger />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-slate-700"
            >
              Role
            </label>
            <InputRoot>
              <InputControl id="role" defaultValue="Owner"></InputControl>
            </InputRoot>
          </div>

          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-slate-700"
            >
              Timezone
            </label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-slate-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-slate-500">
                Write a short introduction.
              </span>
            </label>
            <TextArea />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-slate-700"
            >
              Portfolio
              <span className="mt-0.5 block text-sm font-normal text-slate-500">
                Share a few snippets of your work
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple={true} />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
