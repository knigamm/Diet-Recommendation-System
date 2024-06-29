import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    );
  }
  

const MyPlan = () => {
    return (
        <div className="grid gap-8 px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Today's Diet Plan</h2>
        <Card>
          <CardContent className="grid gap-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-2">
                  <div className="text-lg font-medium">Breakfast</div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Oatmeal with Berries"
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium">Oatmeal with Berries</p>
                      <p className="text-muted-foreground">Calories: 350, Carbs: 50g, Protein: 15g, Fat: 10g</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-2">
                  <div className="text-lg font-medium">Lunch</div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Grilled Chicken Salad"
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium">Grilled Chicken Salad</p>
                      <p className="text-muted-foreground">Calories: 450, Carbs: 20g, Protein: 40g, Fat: 15g</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-2">
                  <div className="text-lg font-medium">Dinner</div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Baked Salmon with Roasted Veggies"
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium">Baked Salmon with Roasted Veggies</p>
                      <p className="text-muted-foreground">Calories: 550, Carbs: 30g, Protein: 35g, Fat: 20g</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-bold">This Week's Plan</h2>
        <Card>
          <CardContent className="grid gap-4">
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Monday
                </Button>
                <Button variant="outline" size="sm">
                  Tuesday
                </Button>
                <Button variant="outline" size="sm">
                  Wednesday
                </Button>
                <Button variant="outline" size="sm">
                  Thursday
                </Button>
                <Button variant="outline" size="sm">
                  Friday
                </Button>
                <Button variant="outline" size="sm">
                  Saturday
                </Button>
                <Button variant="outline" size="sm">
                  Sunday
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-2">
                  <div className="text-lg font-medium">Breakfast</div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Scrambled Eggs with Whole Wheat Toast"
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium">Scrambled Eggs with Whole Wheat Toast</p>
                      <p className="text-muted-foreground">Calories: 320, Carbs: 35g, Protein: 20g, Fat: 12g</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-2">
                  <div className="text-lg font-medium">Lunch</div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Grilled Salmon with Quinoa and Roasted Veggies"
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium">Grilled Salmon with Quinoa and Roasted Veggies</p>
                      <p className="text-muted-foreground">Calories: 480, Carbs: 35g, Protein: 35g, Fat: 18g</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-2">
                  <div className="text-lg font-medium">Dinner</div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Lentil and Sweet Potato Curry"
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <p className="font-medium">Lentil and Sweet Potato Curry</p>
                      <p className="text-muted-foreground">Calories: 420, Carbs: 55g, Protein: 18g, Fat: 12g</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    )
}

export default MyPlan;