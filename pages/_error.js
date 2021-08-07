import Link from "next/link";

import Layout from "components/Layout";

function Error({ statusCode }) {
  const renderMessage = () => {
    /**
     * status code responses are not fully completed
     * @todo complete status codes
     */
    var message = "This means ";
    switch (statusCode) {
      // client side
      case 404:
        message +=
          "the requested site was not found. Maybe you entered the wrong url?";
        break;
      case 401:
        message += "you are not authorized to access this page.";
        break;

      // server side
      case 500:
        message += "das es einen internen server error gegeben hat.";
    }
    return message;
  };
  return (
    <Layout>
      <div className="text-center mx-3">
        <h1 className="text-3xl font-bold mt-20">
          It looks like an error occurred
        </h1>

        <div className="px-5">
          <h2 className="text-base mt-8">
            <span className="text-lg font-semibold">
              The server responded with a status code of {statusCode}{" "}
            </span>
            <br />
            {renderMessage()}
          </h2>

          <div className="flex mt-6 text-left">
            <h3 className="w-1/2 pr-8">
              If you think, something went wrong on our side, please report it
              to us {/* email wenn verfügbar einfügen */}
            </h3>
            <Link href="/">
              <a href="" className="w-1/2 pl-8">
                Or click <span className="underline font-semibold">here</span>{" "}
                to return to the Home-page
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export default Error;
