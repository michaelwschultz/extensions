<<<<<<< HEAD
import { OAuth, getPreferenceValues } from "@raycast/api";
import { OAuthService } from "@raycast/utils";
=======
import { OAuth } from "@raycast/api";
import { OAuthService } from "@raycast/utils";
import { getPreferenceValues } from "@raycast/api";
>>>>>>> contributions/merge-1739071813690

const client = new OAuth.PKCEClient({
  redirectMethod: OAuth.RedirectMethod.Web,
  providerName: "Figma",
  providerIcon: "command-icon.png",
  description: "Connect your Figma account",
});

<<<<<<< HEAD
const { PERSONAL_ACCESS_TOKEN } = getPreferenceValues();
=======
const { PERSONAL_ACCESS_TOKEN } = getPreferenceValues<Preferences>();
>>>>>>> contributions/merge-1739071813690

export const figma = new OAuthService({
  client,
  clientId: "dkY6v4uzFHoH4RaK7mB7Uw",
  authorizeUrl:
<<<<<<< HEAD
    "https://oauth.raycast.com/v1/authorize/F7SnNEtLc3w2AFfhwdtXwpE-rW2l2OOtG3h0z76VKM6YJVtkU17gAmgJgqzIn6lO3X9SCv_iv3_3BS8a1Jq0gc14HUxILPg8wQNB8zBaX4-OjUj2ixG0",
  tokenUrl:
    "https://oauth.raycast.com/v1/token/rsuQtsavqnjuxmA3vCYSGa3E-D8_ruhzY4OqJIOA7aB4_wGaFh2WE0mQc_uMZ7E5Nk8-pAeW3JXE3WlUfgqu_-zNiM4yWU7i_z2-u0pO8HJFh7_H6ohVBh8fcDpk64nT",
  refreshTokenUrl:
    "https://oauth.raycast.com/v1/refresh-token/qJfyXOqhjDouaj06_54vl2O3NoIfY36R_-OOExXZNAS073Bih0aeNaHLO9xEpW6lbooqWCpT6zO7zLvbTx1MtXF2dU5d4B_of5d05Yxh27JIAPHG0uBw7fINhej_ViQ-sbE",
=======
    "https://oauth.raycast.com/v1/authorize/_ege2-Xu_rzO6XIRwPi7Mnne6GARpdRe1I1IAf6ralbKRJjaByWNHIEK4e5ESizgQ_Z2B526iMt1KdooGAMIrAjVvIHgnhTcQziAP_CgEkzYzAHUJRPw",
  tokenUrl:
    "https://oauth.raycast.com/v1/token/qTlHR2nhUt2e07Ynlbw-T4ALSoDPrGnUZU4z1VsH-scRq-We8cI9RfPKJb9UfEau0bCVYIc0qtW5fOVJ0rtUwDN6KSg5d8XgR_wRofMYARLRzAWhTb5mFsXTdFZl3GPQfA",
  refreshTokenUrl:
    "https://oauth.raycast.com/v1/refresh-token/HoH9ux_TZ_15D9D2btgNZHFDsQtYmSFRQKBCeI4XodDg6svGnR7l7hQaSAV9XY95lD9YzMTPcucjZyHCzoGOHRerqbWB1WAJjpjEDPpwkM5Jg2YCIF-fUcv7VFBepLxT5M9iv",
>>>>>>> contributions/merge-1739071813690
  scope: "files:read",
  personalAccessToken: PERSONAL_ACCESS_TOKEN,
});
