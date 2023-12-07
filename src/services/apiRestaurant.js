const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// export async function getMenu() {
//   const res = await fetch(`${API_URL}/menu`);

//   // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
//   if (!res.ok) throw Error("Failed getting menu");

//   const { data } = await res.json();
//   return data;
// }
export async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch menu: ${res.status} - ${res.statusText}`
      );
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get menu");
  }
}
// export async function getOrder(id) {
//   const res = await fetch(`${API_URL}/order/${id}`);
//   if (!res.ok) throw Error(`Couldn't find order #${id}`);

//   const { data } = await res.json();
//   return data;
// }
export async function getOrder(id) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`);

    if (!res.ok) {
      if (res.status === 404) {
        // Handle the case where the order is not found
        return null; // or you can return an empty object, depending on your requirements
      }

      throw new Error(
        `Failed to fetch order #${id}: ${res.status} - ${res.statusText}`
      );
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch order #${id}`);
  }
}

// export async function getOrder(id) {
//   try {
//     const res = await fetch(`${API_URL}/order/${id}`);

//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch order #${id}: ${res.status} - ${res.statusText}`
//       );
//     }

//     const { data } = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error(`Couldn't find order #${id}`);
//   }
// }

// export async function createOrder(newOrder) {
//   try {
//     const res = await fetch(`${API_URL}/order`, {
//       method: "POST",
//       body: JSON.stringify(newOrder),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!res.ok) throw Error();
//     const { data } = await res.json();
//     return data;
//   } catch {
//     throw Error("Failed creating your order");
//   }
// }
export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to create order: ${res.status} - ${res.statusText}`
      );
    }

    const { data } = await res.json();
    console.log("Created Order:", data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed creating your order");
  }
}
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
