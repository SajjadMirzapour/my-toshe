const baseUrl = "http://localhost:5000";

export async function fetchMobilesData() {
  const res = await fetch(`${baseUrl}/mobiles`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("seems you are offline!!");
  } else {
    return res.json();
  }
}

export async function fetchMobileData(id : any) {
  console.log("id", id);
  const res = await fetch(`${baseUrl}/mobiles?id=${id}`);
  if (!res.ok) {
    throw new Error("seems you are offline!!");
  } else {
    return res.json();
  }
}
