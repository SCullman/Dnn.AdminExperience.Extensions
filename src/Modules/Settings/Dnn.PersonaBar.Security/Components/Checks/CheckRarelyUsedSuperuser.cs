﻿using System;
using DotNetNuke.Entities.Users;

namespace Dnn.PersonaBar.Security.Components.Checks
{
    public class CheckRarelyUsedSuperuser : IAuditCheck
    {
        public CheckResult Execute()
        {
            var result = new CheckResult(SeverityEnum.Unverified, "CheckRarelyUsedSuperuser");
            try
            {
                var totalRecords = 0;

                var superUsers = UserController.GetUsers(-1, 1, int.MaxValue, ref totalRecords, true, true);
                result.Severity = SeverityEnum.Pass;
                foreach (UserInfo user  in superUsers)
                {
                    if (DateTime.Now.AddMonths(-6) > user.Membership.LastLoginDate ||
                        DateTime.Now.AddMonths(-6) > user.Membership.LastActivityDate)
                    {
                        result.Severity = SeverityEnum.Warning;
                        result.Notes.Add("Superuser:" + user.Username);
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return result;
        }
    }
}