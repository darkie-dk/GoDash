'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const signUpForm = z.object({
  businessName: z.string(),
  managerName: z.string(),
  phoneNumber: z.number(),
  email: z.string().email(),
  password: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Conta criada!', {
        action: {
          label: 'Fazer Login',
          onClick: () => redirect('/auth/sign-in'),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <>
      <Button
        asChild
        className="absolute right-8 top-8 shadow-md"
        variant={'ghost'}
      >
        <Link href="/auth/sign-in">Entrar com conta</Link>
      </Button>
      <div className="flex w-80 flex-col justify-center gap-2 rounded-sm bg-muted p-2">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Faça seu Cadastro
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe e gerencie pedidos e vendas do seu negócio.
          </p>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="businessName">Nome do estabelecimento</Label>
            <Input
              id="businessName"
              type="text"
              placeholder="Digite aqui..."
              {...register('businessName')}
            ></Input>
            <Label htmlFor="managerName">Seu nome</Label>
            <Input
              id="managerName"
              type="text"
              placeholder="Digite seu email..."
              {...register('managerName')}
            ></Input>
            <Label htmlFor="phoneNumber">Número de telefone</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Digite seu email..."
              {...register('phoneNumber')}
            ></Input>
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

          <Button disabled={isSubmitting} type="submit" className="text-muted">
            Criar Conta
          </Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar, você concorda com nossos{' '}
            <a className="cursor-pointer text-blue-600 underline underline-offset-2">
              termos de serviço
            </a>{' '}
            e{' '}
            <a className="cursor-pointer text-blue-600 underline underline-offset-2">
              políticas de privacidade
            </a>{' '}
            .
          </p>
        </form>
      </div>
    </>
  )
}
