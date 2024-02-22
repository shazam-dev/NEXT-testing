import Status from './status';

export default function Page() {
  return (
    <>
      <p>Invoices Page</p>
      <Status status={'paid'} />
    </>
  );
}
