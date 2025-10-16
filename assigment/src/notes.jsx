// USEMEMO
// Expensive calculations baar-baar na ho, isiliye result ko memory mein rakh lo (cache).
// Koi heavy calculation ho jo baar-baar chal rahi ho.

// But result tabhi change ho jab koi dependency change ho


// USECALLBACK
// Function ko baar-baar na banaye jao, jab tak dependencies same hain

// Function ko kisi child component ko props mein bhejna ho.

// Want to avoid unnecessary re-renders.