export default async function Page() {
    return <div>{process.env.SERVER_ENV_VAR || "hello world"}</div>
}