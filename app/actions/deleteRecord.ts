'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

async function deleteRecord(recordId: string): Promise<{
  message?: string;
  deletedAmount?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    // Fetch the record before deleting
    const record = await db.record.findUnique({
      where: {
        id: recordId,
        userId,
      },
    });

    if (!record) {
      return { error: 'Record not found' };
    }

    // Delete the record
    await db.record.delete({
      where: { id: recordId },
    });

    revalidatePath('/');

    // Format amount in naira
    const nairaFormatted = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(record.amount);

    return {
      message: `Record deleted: ${record.text} (${nairaFormatted})`,
      deletedAmount: nairaFormatted,
    };
  } catch (error) {
    console.error('Error deleting record:', error);
    return { error: 'Database error' };
  }
}

export default deleteRecord;
