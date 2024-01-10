using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    /// <inheritdoc />
    public partial class Madmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admin_Datas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    lastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phnNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dateOfBirth = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_admin_Datas", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "admin_Datas");
        }
    }
}
