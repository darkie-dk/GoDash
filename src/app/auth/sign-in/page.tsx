'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LuPizza } from 'react-icons/lu'
import Link from 'next/link'

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
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Login realizado!', {})
    } catch {}
  }

  return (
    <>
      <Button
        asChild
        className="absolute right-8 top-8 shadow-md"
        variant={'ghost'}
      >
        <Link href="/auth/sign-up">Novo estabelecimento</Link>
      </Button>
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
    </>
  )
}
