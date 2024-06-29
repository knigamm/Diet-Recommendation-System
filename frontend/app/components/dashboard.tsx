"use client"   
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

function CalendarIcon(props) {
         return (
           <svg
             {...props}
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             <path d="M8 2v4" />
             <path d="M16 2v4" />
             <rect width="18" height="18" x="3" y="4" rx="2" />
             <path d="M3 10h18" />
           </svg>
         )
       }
       
       
       function ChevronDownIcon(props) {
         return (
           <svg
             {...props}
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             <path d="m6 9 6 6 6-6" />
           </svg>
         )
       }
       
       
       function ChevronsDownUpIcon(props) {
         return (
           <svg
             {...props}
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             <path d="m7 20 5-5 5 5" />
             <path d="m7 4 5 5 5-5" />
           </svg>
         )
       }
       
       
       function ChevronsUpDownIcon(props) {
         return (
           <svg
             {...props}
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             <path d="m7 15 5 5 5-5" />
             <path d="m7 9 5-5 5 5" />
           </svg>
         )
       }
       
       
       function FilePenIcon(props) {
         return (
           <svg
             {...props}
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
             <path d="M14 2v4a2 2 0 0 0 2 2h4" />
             <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
           </svg>
         )
       }
       
       
       function ShuffleIcon(props) {
         return (
           <svg
             {...props}
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
             <path d="m18 2 4 4-4 4" />
             <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
             <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
             <path d="m18 14 4 4-4 4" />
           </svg>
         )
       }


       
const Dashboard = () => {
    return (
           <main className="flex-1 bg-muted/40 p-6 md:p-10">
             <div className="grid gap-6 md:gap-10">
               <div className="grid gap-4">
                 <div className="flex items-center justify-between">
                   <h1 className="text-2xl font-bold">Today's Diet Plan</h1>
                   <div className="flex items-center gap-2">
                     <Button variant="outline" size="sm">
                       <CalendarIcon className="w-4 h-4" />
                       <span>View Calendar</span>
                     </Button>
                     <Button variant="outline" size="sm">
                       <FilePenIcon className="w-4 h-4" />
                       <span>Edit Plan</span>
                     </Button>
                   </div>
                 </div>
                 <div className="grid gap-6">
                   <div className="grid gap-4">
                     <div className="flex items-center justify-between">
                       <h2 className="text-lg font-semibold">Breakfast</h2>

                     </div>
                       <Card>
                         <CardContent className="flex flex-col gap-4">
                           <div className="flex items-center justify-between">
                             <div className="flex items-center gap-4">
                               <img src="/placeholder.svg" width={64} height={64} alt="Meal" className="rounded-md" />
                               <div>
                                 <h3 className="font-semibold">Oatmeal with Berries</h3>
                                 <p className="text-sm text-muted-foreground">Oats, blueberries, honey</p>
                               </div>
                             </div>
                             <div className="flex items-center gap-2">
                               <Button variant="ghost" size="icon">
                                 <ShuffleIcon className="w-5 h-5" />
                               </Button>
                               <Checkbox id="breakfast-item-1" />
                             </div>
                           </div>
                         </CardContent>
                       </Card>
                   </div>
                   <div className="grid gap-4">
                     <div className="flex items-center justify-between">
                       <h2 className="text-lg font-semibold">Lunch</h2>
                     </div>
                       <Card>
                         <CardContent className="flex flex-col gap-4">
                           <div className="flex items-center justify-between">
                             <div className="flex items-center gap-4">
                               <img src="/placeholder.svg" width={64} height={64} alt="Meal" className="rounded-md" />
                               <div>
                                 <h3 className="font-semibold">Grilled Salmon Salad</h3>
                                 <p className="text-sm text-muted-foreground">Salmon, mixed greens, avocado, lemon dressing</p>
                               </div>
                             </div>
                             <div className="flex items-center gap-2">
                               <Button variant="ghost" size="icon">
                                 <ShuffleIcon className="w-5 h-5" />
                               </Button>
                               <Checkbox id="lunch-item-1" />
                             </div>
                           </div>
                         </CardContent>
                       </Card>
                   </div>
                   <div className="grid gap-4">
                     <div className="flex items-center justify-between">
                       <h2 className="text-lg font-semibold">Dinner</h2>
                     </div>
                       <Card>
                         <CardContent className="flex flex-col gap-4">
                           <div className="flex items-center justify-between">
                             <div className="flex items-center gap-4">
                               <img src="/placeholder.svg" width={64} height={64} alt="Meal" className="rounded-md" />
                               <div>
                                 <h3 className="font-semibold">Grilled Chicken with Veggies</h3>
                                 <p className="text-sm text-muted-foreground">Chicken, broccoli, carrots, quinoa</p>
                               </div>
                             </div>
                             <div className="flex items-center gap-2">
                               <Button variant="ghost" size="icon">
                                 <ShuffleIcon className="w-5 h-5" />
                               </Button>
                               <Checkbox id="dinner-item-1" />
                             </div>
                           </div>
                         </CardContent>
                       </Card>
                   </div>
                 </div>
               </div>
               <div className="grid gap-4">
                 <h2 className="text-lg font-semibold">Nutritional Intake</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   <Card>
                     <CardHeader>
                       <CardTitle>Calories</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <div className="flex items-center justify-between">
                         <span className="text-2xl font-bold">1,200</span>
                         <span className="text-sm text-muted-foreground">/ 1,500</span>
                       </div>
                       <div className="w-full bg-muted rounded-full h-2 mt-2">
                         <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }} />
                       </div>
                     </CardContent>
                   </Card>
                   <Card>
                     <CardHeader>
                       <CardTitle>Protein</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <div className="flex items-center justify-between">
                         <span className="text-2xl font-bold">80g</span>
                         <span className="text-sm text-muted-foreground">/ 100g</span>
                       </div>
                       <div className="w-full bg-muted rounded-full h-2 mt-2">
                         <div className="bg-secondary h-2 rounded-full" style={{ width: "80%" }} />
                       </div>
                     </CardContent>
                   </Card>
                   <Card>
                     <CardHeader>
                       <CardTitle>Carbs</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <div className="flex items-center justify-between">
                         <span className="text-2xl font-bold">150g</span>
                         <span className="text-sm text-muted-foreground">/ 200g</span>
                       </div>
                       <div className="w-full bg-muted rounded-full h-2 mt-2">
                         <div className="bg-accent h-2 rounded-full" style={{ width: "75%" }} />
                       </div>
                     </CardContent>
                   </Card>
                   <Card>
                     <CardHeader>
                       <CardTitle>Fats</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <div className="flex items-center justify-between">
                         <span className="text-2xl font-bold">50g</span>
                         <span className="text-sm text-muted-foreground">/ 65g</span>
                       </div>
                       <div className="w-full bg-muted rounded-full h-2 mt-2">
                         <div className="bg-muted-foreground h-2 rounded-full" style={{ width: "75%" }} />
                       </div>
                     </CardContent>
                   </Card>
                 </div>
               </div>
             </div>
           </main>
    )
  }
 
export default Dashboard;