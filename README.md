# Hamrah Tech - Frontend & Laravel Backend Integration Guide

This guide explains how the React frontend (`src/services/api.ts`) communicates with the Laravel backend API.

---

## 1. Frontend API Client (`src/services/api.ts`)

We have created a centralized Axios service client in `src/services/api.ts`. It handles:
- **Base URL Configuration:** Automatically reads `VITE_API_BASE_URL` from `.env`.
- **Sanctum & CORS Support:** `withCredentials: true` is enabled for cookie-based authentication and CSRF protection.
- **Error Handling:** Standardized error catching and response formatting.

### Usage in React Components:
```tsx
import { apiService } from '../services/api';

// Example inside a form submission handler:
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await apiService.submitLead({
      full_name: 'John Doe',
      email: 'john@example.com',
      message: 'Interested in React & Laravel development.',
      service_interest: 'Web Development',
      budget_range: '$5k - $10k'
    });
    alert('Success: ' + result.message);
  } catch (err: any) {
    alert('Error: ' + err.message);
  }
};
```

---

## 2. Laravel Backend Implementation Guide

To connect the Laravel backend, follow these steps:

### A. Environment Variables (`.env`)
In your Laravel `.env` file, ensure CORS and session domains match your frontend URL:
```env
APP_URL=https://api.hamrahtech.com
FRONTEND_URL=https://hamrahtech.com

SANCTUM_STATEFUL_DOMAINS=hamrahtech.com,localhost:3000
SESSION_DOMAIN=.hamrahtech.com
```

### B. CORS Configuration (`config/cors.php`)
```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:3000', 'https://hamrahtech.com'],
    'allowed_headers' => ['*'],
    'supports_credentials' => true,
];
```

### C. API Routes (`routes/api.php`)
```php
use App\Http\Controllers\Api\LeadController;
use App\Http\Controllers\Api\NewsletterController;

Route::prefix('v1')->group(function () {
    Route::post('/leads', [LeadController::class, 'store']);
    Route::post('/newsletter', [NewsletterController::class, 'store']);
});
```

### D. Controllers (`app/Http/Controllers/Api/LeadController.php`)
```php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
            'service_interest' => 'nullable|string',
            'budget_range' => 'nullable|string',
        ]);

        $lead = Lead::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Lead submitted successfully. Our team will contact you soon.',
            'data' => $lead
        ], 201);
    }
}
```

---

## 3. Environment Variable in React (`.env.example`)
Create a `.env` file in the root of the React project:
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```
