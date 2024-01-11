using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace back_end.Migrations
{
    /// <inheritdoc />
    public partial class dataadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "appointments",
                columns: new[] { "Id", "address", "name", "time" },
                values: new object[,]
                {
                    { 1, "colombo", "chathura", new DateTime(2024, 1, 10, 14, 30, 0, 0, DateTimeKind.Unspecified) },
                    { 2, "kandy", "kamal", new DateTime(2024, 1, 10, 16, 30, 0, 0, DateTimeKind.Unspecified) },
                    { 3, "jaffna", "amal", new DateTime(2024, 1, 10, 15, 30, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "appointments",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "appointments",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "appointments",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
