import Heading from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";
import Head from "next/head";

const SettingsPage = async () => {

  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Mangage Account Settings"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      ></Heading>
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro  ? "You are currently on Pro Plan" : "You are currently on a Free Plan"}
        </div>

      <SubscriptionButton isPro={isPro}/>
      </div>
    </div>
  );
};

export default SettingsPage;
