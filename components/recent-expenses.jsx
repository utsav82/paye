import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function RecentExpenses() {

  const data = [
    {
      "avatarSrc": "/avatars/01.png",
      "avatarFallback": "OM",
      "name": "Olivia Martin",
      "email": "olivia.martin@email.com",
      "amount": 1999.0
    },
    {
      "avatarSrc": "/avatars/02.png",
      "avatarFallback": "JL",
      "name": "Jackson Lee",
      "email": "jackson.lee@email.com",
      "amount": 39.0
    },
    {
      "avatarSrc": "/avatars/03.png",
      "avatarFallback": "IN",
      "name": "Isabella Nguyen",
      "email": "isabella.nguyen@email.com",
      "amount": 299.0
    },
    {
      "avatarSrc": "/avatars/04.png",
      "avatarFallback": "WK",
      "name": "William Kim",
      "email": "will@email.com",
      "amount": 99.0
    },
    {
      "avatarSrc": "/avatars/05.png",
      "avatarFallback": "SD",
      "name": "Sofia Davis",
      "email": "sofia.davis@email.com",
      "amount": 39.0
    }
  ]
  
  return (
    <div className="space-y-8">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.avatarSrc} alt={`Avatar ${index + 1}`} />
            <AvatarFallback>{item.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.email}</p>
          </div>
          <div className="ml-auto font-medium">{`+$${item.amount.toFixed(2)}`}</div>
        </div>
      ))}
    </div>
  );
}
