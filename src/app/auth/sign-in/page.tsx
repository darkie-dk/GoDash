'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LuPizza } from 'react-icons/lu'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    console.log(data)

    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('Um email de verificação foi enviado para seu email.', {})
  }

  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <LuPizza className="h-5 w-5" />
          <span className="font-semibold">GoDash</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; GoDash - {new Date().getFullYear()}{' '}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center bg-muted-foreground p-8">
        <div className="flex w-80 flex-col justify-center gap-2 rounded-sm bg-muted p-2">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe e gerencie pedidos e vendas do seu negócio.
            </p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email..."
                {...register('email')}
              ></Input>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha..."
                {...register('password')}
              ></Input>
            </div>

            <Button disabled={isSubmitting} type="submit">
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
