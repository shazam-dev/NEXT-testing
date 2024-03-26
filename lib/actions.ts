'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { signOut } from '@/auth';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ date: true, id: true });

// This is temporary
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function getMapItems(formData: FormData) {
    // const data  = await req.json()
    console.log(formData)
        
    const data  = [
      {
          "id": "1",
          "discount": "5",
          "cost": "570",
          "name": "Сертификат на посещение спортивного комплекса",
          "latitude": "48.5022276",
          "longitude": "44.5502945",
          "currentTime": 1705311301055,

      },
      {
          "id": "1",
          "discount": "20",
          "cost": "500",
          "name": "Стабильные скидки от -5%, -7%, -10%.",
          "latitude": "48.520061",
          "longitude": "44.562268",

      },
      {
          "id": "1",
          "discount": "35",
          "cost": "395",
          "name": "Бизнес-обед Додо - 395руб.",
          "latitude": "48.5144485",
          "longitude": "44.5371639",
          "currentTime": 1709541363476,

      },
      {
          "id": "1",
          "discount": "10",
          "cost": "250",
          "name": "Скидка 7% для социальных групп населения",
          "latitude": "48.5121169",
          "longitude": "44.5477832",
          "currentTime": 1709541956235,

      }
  ]
  return data;
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  console.log(formData)
  try {
    await signIn('credentials', formData);
  } catch (error) {
    console.log(error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Логин и пароль не совпадают!';
        default:
          return 'Ошибка сервера, обратитесь к администрации!';
      }
    }
    throw error;
  }
}


export async function logOut() {
  await signOut();
}




