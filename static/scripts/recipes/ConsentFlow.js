export default function ConsentFlow(workflowCtx, portal) {
  return {
    Overview: {
      name: "Overview",
      stepCallback: async () => {
  return workflowCtx.showContent(
    `# Consent Management Flow

This API Recipe covers the following endpoints:

## List All Consents

Retrieves a list of all active and historical consents associated with the authenticated user or system.
Supports optional filtering by status and pagination.

---

## Get Consent by ID

Retrieves detailed information about a specific consent using its **consentId**.

---

## Revoke Consent by ID

Revokes an existing consent identified by its **consentId**.
`
  );
      },
    },
    "Step 1": {
      name: "List All Consents",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          description:
            "Retrieves a list of all active and historical consents associated with the authenticated user or system.\nSupports optional filtering by status and pagination.",
          endpointPermalink: "$e/consents/listConsents",
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              setError(
                "API Call wasn't able to get a valid response. Please try again."
              );
              return false;
            }
          },
        });
      },
    },
    "Step 2": {
      name: "Get Consent by ID",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          description:
            "Retrieves detailed information about a specific consent using its `consentId`.",
          endpointPermalink: "$e/consents/getConsent",
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              setError(
                "API Call wasn't able to get a valid response. Please try again."
              );
              return false;
            }
          },
        });
      },
    },
    "Step 3": {
      name: "Revoke Consent by ID",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          description:
            "Revokes an existing consent identified by its `consentId`.",
          endpointPermalink: "$e/consents/revokeConsent",
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              setError(
                "API Call wasn't able to get a valid response. Please try again."
              );
              return false;
            }
          },
        });
      },
    },
  };
}
