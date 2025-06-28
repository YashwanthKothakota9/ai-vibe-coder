'use client';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

const Page = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: 'world' }));
  return (
    <div>
      <h1 className="font-bold">{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Page;
