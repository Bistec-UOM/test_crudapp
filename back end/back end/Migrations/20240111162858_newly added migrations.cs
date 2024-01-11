using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace back_end.Migrations
{
    /// <inheritdoc />
    public partial class newlyaddedmigrations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "appointments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    time = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_appointments", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "appointments",
                columns: new[] { "Id", "address", "name", "nic", "time" },
                values: new object[,]
                {
                    { 1, "colombo", "chathura", "2100143433", new DateTime(2024, 1, 10, 14, 30, 0, 0, DateTimeKind.Unspecified) },
                    { 2, "kandy", "kamal", "987655242", new DateTime(2024, 1, 10, 16, 30, 0, 0, DateTimeKind.Unspecified) },
                    { 3, "jaffna", "amal", "99671234", new DateTime(2024, 1, 10, 15, 30, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "appointments");
        }
    }
}
