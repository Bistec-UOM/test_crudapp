namespace back_end.Models
{
    public class Admin_Data
    {
        public int Id { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? email { get; set; }
        public string? phnNumber { get; set; }
        public string? dateOfBirth { get; set; }
        public string? password { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
