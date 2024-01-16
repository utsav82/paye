import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const MemberCard = ({ avatarFallback, name, email }) => {
  return (
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="hidden sm:block text-sm text-muted-foreground">{email}</p>
      </div>
    </div>
  );
};

const Page = () => {
  const members = [
    { avatarFallback: 'OM', name: 'Olivia Martin', email: 'olivia.martin@email.com' },
    { avatarFallback: 'JL', name: 'Jackson Lee', email: 'jackson.lee@email.com' },
    { avatarFallback: 'IN', name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com' },
    { avatarFallback: 'WK', name: 'William Kim', email: 'will@email.com' },
    { avatarFallback: 'SD', name: 'Sofia Davis', email: 'sofia.davis@email.com' },
  ];

  return (
    <div>
      <CardHeader>
        <CardTitle>Group Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default Page;
