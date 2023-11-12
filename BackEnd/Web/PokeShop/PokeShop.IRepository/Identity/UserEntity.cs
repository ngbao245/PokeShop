using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PokeShop.IRepository.Identity
{
    public class UserEntity : IdentityUser
    {
        public string PasswordEncrypt { get; set; }
        public string? VerificationToken { get; set; }
        public string? ResetToken { get; set; }
        public DateTimeOffset? ResetTokenExpires { get; set; }
        public DateTimeOffset CreatedTime { get; set; }
        public bool IsActive => EmailConfirmed && AccessFailedCount < 5;
        public bool EmailConfirmed { get; set; }        

    }
}
