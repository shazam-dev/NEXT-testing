'use client'
import { Button, Result } from 'antd';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

    // TODO сделатьобработку ошибок  с записью их в БД
  return (
    <html>
      <body>
      <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" onClick={() => reset()}>Back Home</Button>}
        />

        {/* <button onClick={() => reset()}>Try again</button> */}
      </body>
    </html>
  )
}