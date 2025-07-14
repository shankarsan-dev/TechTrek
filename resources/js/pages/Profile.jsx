import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const dummyUserData = {
  name: "John Doe",
  email: "john.doe@example.com",
  bio: "Passionate event-goer and tech enthusiast. Always looking for the next big tech conference or workshop.",
  avatar: "/placeholder-user.jpg", // Using the placeholder image
  upcomingEvents: [
    { id: 1, name: "AI Summit 2024", date: "2024-07-15", location: "Virtual" },
    { id: 2, name: "Web Dev Conference", date: "2024-08-22", location: "New York" },
  ],
  pastEvents: [{ id: 3, name: "Cloud Expo 2023", date: "2023-10-01", location: "San Francisco" }],
}

export default function Profile() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Information Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={dummyUserData.avatar || "/placeholder.svg"} alt={dummyUserData.name} />
                <AvatarFallback>
                  {dummyUserData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold">{dummyUserData.name}</h2>
                <p className="text-gray-500">{dummyUserData.email}</p>
              </div>
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                rows="4"
                value={dummyUserData.bio}
                readOnly
              />
            </div>
            <div className="flex justify-end">
              <Button variant="outline">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events Card */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            {dummyUserData.upcomingEvents.length > 0 ? (
              <ul className="space-y-2">
                {dummyUserData.upcomingEvents.map((event) => (
                  <li key={event.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{event.name}</p>
                      <p className="text-sm text-gray-500">
                        {event.date} - {event.location}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No upcoming events.</p>
            )}
          </CardContent>
        </Card>

        {/* Past Events Card */}
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Past Events</CardTitle>
          </CardHeader>
          <CardContent>
            {dummyUserData.pastEvents.length > 0 ? (
              <ul className="space-y-2">
                {dummyUserData.pastEvents.map((event) => (
                  <li key={event.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{event.name}</p>
                      <p className="text-sm text-gray-500">
                        {event.date} - {event.location}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No past events.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
