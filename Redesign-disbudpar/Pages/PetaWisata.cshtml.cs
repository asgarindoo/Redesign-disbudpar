using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Redesign_disbudpar.Pages
{
    public class PetaWisataModel : PageModel
    {
        public async Task<IActionResult> OnGet(string mapID)
        {
            ID = mapID;
            return Page();
        }

        public static string ID;

    }   
}
