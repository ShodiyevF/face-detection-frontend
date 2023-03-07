import Login from "./Login/Login";

export default function MainPage() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
