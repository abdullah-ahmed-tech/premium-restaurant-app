import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="product/[id]" />
      <Stack.Screen name="order/tracking" />
      <Stack.Screen name="reservation/index" />
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/register" />
      <Stack.Screen name="notifications/index" />
      <Stack.Screen name="reviews/index" />
      <Stack.Screen name="restaurant-info/index" />
      <Stack.Screen name="checkout/index" />
      <Stack.Screen name="operations/index" />
      <Stack.Screen name="profile/edit" />
      <Stack.Screen name="help-support/index" />
    </Stack>
  );
}