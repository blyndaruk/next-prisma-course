import React, { FC } from 'react';
import { Metadata } from 'next';
import { prisma } from '@/db';
import { redirect } from 'next/navigation';
import EditBlock from '@/components/EditBlock';

interface Props {}

export const metadata: Metadata = {
  title: 'Create Snippet',
};

const CreateSnippetPage: FC<Props> = ({}) => {
  // const res = await fetch('/');
  // console.log(res, ' res');

  async function createSnippet(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await prisma.snippet.create({
      data: { title, code },
    });

    console.info(snippet);

    redirect('/');
  }

  return (
    <div className="pt-16">
      <h3>Create Snippet</h3>
      {/* <EditBlock /> */}
      <form action={createSnippet}>
        <div className="flex gap-4">
          <label htmlFor="title" className="block w-full">
            <span>Title</span>
            <input id="title" type="text" name="title" className="border rounded p-2 w-full" />
          </label>
        </div>

        <div className="flex mt-10 gap-4">
          <label htmlFor="code" className="block w-full">
            <span>Code</span>
            <textarea id="code" name="code" className="border rounded p-2 w-full" />
          </label>
        </div>

        <button type="submit" className="mt-2 rounded p-2 w-full bg-blue-200">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateSnippetPage;
