import React from "react";

export default function AlertCard(props) {
  const { meta } = props.authState;
  const { setAuth } = props;

  return (
    <div
      className={`card ${
        meta && meta.suggestPasswordChange ? "text-white bg-warning" : ""
      } mt-3`}
    >
      <div className="card-header">Alerts</div>
      <div className="card-body">
        {meta && meta.suggestPasswordChange && (
          <>
            <p className="card-text mb-3">
              Your email was involved in a breach on the following sites:
            </p>
            <ul className="list-group list-group-flush">
              {meta.breachedAccounts.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`list-group-item ${
                      meta.suggestPasswordChange ? "text-white bg-warning" : ""
                    }`}
                  >
                    {`${new Date(item.addedDate).toLocaleDateString(
                      "en-US"
                    )} - ${item.name}`}
                  </li>
                );
              })}
            </ul>
            <p className="card-text mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt nibh in velit venenatis, in convallis metus
              efficitur. Vivamus sodales, mi at porta elementum, leo sapien
              aliquam nisl, vitae laoreet lacus elit eu massa.
            </p>
            <button
              type="button"
              className="btn btn-primary mr-1"
              onClick={() => alert("Ok, let's change it!")}
            >
              Change Password
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                setAuth({
                  ...props.authState,
                  meta: { ...meta, suggestPasswordChange: false },
                })
              }
            >
              Dismiss
            </button>
          </>
        )}
        {(!meta || !meta.suggestPasswordChange) && (
          <p className="card-text mb-3">No Alerts</p>
        )}
      </div>
    </div>
  );
}
